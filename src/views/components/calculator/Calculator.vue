<template>

  <div class="calculator">

    <!-- alert -->
    <UiAlert v-if="options.welcome" @close="options.welcome = false" class="mb-4">
      Press and hold -/+ buttons to add/subtract quickly!
    </UiAlert>

    <!--
        <div class="form-check form-check-right">
          <label for="showTotals">Show totals</label>
          <input type="checkbox" v-model="options.totals" id="showTotals">
        </div>
    -->

    <!-- usage -->
    <h2 class="d-flex justify-content-between">
      <span>Usage <template v-if="person.name && people.length > 1"><span class="detail">{{ person.name }}</span></template></span>
    </h2>
    <CalculatorUsage ref="usage" :showTotals="options.totals" @change="onUsageChange"/>

    <!-- people -->
    <h2>People <span v-if="people.length > 1" class="detail">{{ people.length }}</span></h2>
    <article>
      <UiPerson v-for="(person, index) in people"
                v-model="person.name"
                ref="people"
                :key="person.id"
                :active="person.id === personId"
                :total="person.total"
                :removable="index > 0"
                @click="selectPerson(index)"
                @remove="removePerson(index)"
      />
      <a href="#" class="ml-3 small" @click.prevent="addPerson">Add another person</a>
    </article>

    <!-- paper -->
    <h2>Toilet paper</h2>
    <article>
      <section>
        <!--
        <select name="roll" id="roll">
          <option value="dulux">Dulux Extra padded</option>
          <option value="dulux">Dulux Extra padded</option>
          <option value="dulux">Dulux Extra padded</option>
          <option value="dulux">Dulux Extra padded</option>
        </select>
        -->
        <UiNumber label="Sheets per roll" hint="Find this information on the side of the pack" v-model="other.sheetsRoll" :step="10" :min="100"/>
        <!--        <UiOutput label="Sheets per day" v-model="totalSheetsDay" :precision="1"/>-->
        <UiOutput v-if="options.totals" label="Days per roll" v-model="daysRoll" :precision="1"/>
      </section>
    </article>

    <!-- quarantine -->
    <h2>Quarantine</h2>
    <article>
      <section>
        <UiOutput label="Time in quarantine">
          <select v-model="other.daysQuarantined" name="quarantine" id="quarantine">
            <option v-for="period in periods" :value="period.days">{{ period.label }}</option>
          </select>
        </UiOutput>
      </section>
    </article>

    <!-- result -->
    <div class="result">
      Buy <span>{{ rollsRequired }}</span> {{ plural(rollsRequired, 'roll') }}
    </div>

    <div>
      <button type="reset" class="btn btn-secondary reset" @click="reset">Start again</button>
      <!--      <button type="reset" class="btn btn-secondary reset" @click="reset">Buy now</button>-->
    </div>

  </div>

</template>

<script>
import UiPerson from './UiPerson'
import CalculatorUsage from './CalculatorUsage'
import { clone, getPaperData } from './utils'

function time (days, label) {
  return { days, label }
}

const periods = [
  time(14, 'Two weeks'),
  time(21, 'Three weeks'),
  time(365 / 12, 'One month'),
  time(6 * 7, 'Six weeks'),
  time(365 / 6, 'Two months'),
  time(365 / 4, 'Three months'),
  time(365 / 2, 'Six months'),
  time(365 * .75, 'Nine months'),
  time(365, 'One year'),
]

let id = 0

function makePerson (name) {
  return {
    id: String(++id),
    name,
    data: getPaperData(),
    total: 18
  }
}

function getData () {
  const person = makePerson('You')
  return {
    options: {
      welcome: true,
      totals: false,
    },

    personId: person.id,

    people: [
      person,
    ],

    other: {
      sheetsRoll: 200,
      daysQuarantined: 14,
    },
  }
}

export default {
  components: {
    CalculatorUsage,
    UiPerson,
  },

  data () {
    return {
      periods,
      ...getData(),
    }
  },

  computed: {
    person () {
      return this.getPerson(this.personId) || {}
    },

    totalSheetsDay() {
      return this.people.reduce((total, person) => {
        total+= person.total || 0
        return total
      }, 0)
    },

    daysRoll () {
      const value = this.other.sheetsRoll / this.totalSheetsDay
      return value === Number.POSITIVE_INFINITY ? 0 : value
    },

    rollsRequired () {
      const value = Math.ceil(this.other.daysQuarantined / this.daysRoll)
      return value === Number.POSITIVE_INFINITY ? 0 : value
    },
  },

  watch: {
    personId (value, oldValue) {
      if (!value) {
        this.addPerson()
      }
    },
  },

  methods: {
    onUsageChange (total, data) {
      const person = this.getPerson()
      person.total = total
      person.data = clone(data)
    },

    getPerson (personId = undefined) {
      personId = personId || this.personId
      return this.people.find(person => person.id === personId)
    },

    addPerson () {
      // add person
      const index = this.people.length + 1
      const person = makePerson('Person ' + index)
      this.people.push(person)
      this.personId = person.id

      // update usage component
      this.$refs.usage.setData(person.data)

      // immediately edit name
      this.$nextTick(() => {
        this.$refs.people[this.people.length - 1].edit()
      })
    },

    selectPerson (index, scroll = true) {
      this.personId = this.people[index].id
      this.$refs.usage.setData(this.getPerson().data)
      if (scroll) {
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 400)
      }
    },

    removePerson (index) {
      const person = this.people.splice(index, 1).shift()
      if (person.id === this.personId) {
        this.selectPerson(index - 1, false)
      }
    },

    reset () {
      this.$refs.usage.reset()
      Object.assign(this, getData())
      window.scrollTo(0, 0)
    },

    plural (value, single) {
      if (value !== 1) {
        single += 's'
      }
      return `${single}`
    },
  },
}

</script>

<style lang="scss">
.calculator {
  position: relative;

  article {
    border-left: 2px dashed #CCC;
    padding: 10px 0 10px 20px;
    margin: 15px 0 15px 10px;
  }

  .form-group.row:last-child {
    // margin-bottom: 0;
  }

  h3 {
    color: #1660A6;
  }

  h2, h3, h4 {
    margin: 0;
  }

  .rollsRequired {
    .uiOutput__value {
      font-size: 3rem;
    }
  }

  .result {
    margin: 20px 0;
    text-align: center;
    font-family: brandon-grotesque, sans-serif;
    font-weight: 900;
    font-size: 3.2rem;

    span {
      vertical-align: middle;
      font-size: 2em;
      color: #df0f1b;
    }
  }

  @media only screen and (min-width: 600px) {
    .result {
      font-size: 5rem;
    }
  }

  .reset {
    margin-top: 30px;
    width: 100%;
    font-family: brandon-grotesque, sans-serif;
    font-weight: 700;
    font-size: 1.2em;
  }

  .link-remove {
    font-weight: bold;
  }

}

.form-check-right {
  position: absolute;
  top: -1rem;
  right: 0;

  label {
    line-height: .8em;
  }

  input {
    margin-top: .3rem;
    margin-left: .3rem;
    cursor: pointer;
  }
}

.detail {
  color: $blue-dark;

  &:before {
    content: '( ';
    color: #212529;
  }

  &:after {
    content: ' )';
    color: #212529;
  }
}

</style>

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
      <span>Usage<template v-if="person.name && people.length > 1"><span class="detail">{{ person.name }}</span></template></span>
    </h2>
    <CalculatorUsage ref="usage" :showTotals="options.totals" @change="onUsageChange"/>

    <!-- people -->
    <h2>People<span v-if="people.length > 1" class="detail">{{ people.length }}</span></h2>
    <article>
      <UiPerson v-for="(person, index) in people"
                v-model="person.name"
                ref="people"
                :key="person.id"
                :active="person.id === personId"
                :total="person.total"
                :removable="index > 0"
                @click="showPerson(index)"
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
        <UiNumber label="Sheets per roll" hint="Find this information on the side of the pack" v-model="form.sheetsRoll" :step="10" :min="100"/>
        <!--        <UiOutput label="Sheets per day" v-model="totalSheetsDay" :precision="1"/>-->
        <UiOutput v-if="options.totals" label="Days per roll" v-model="daysRoll" :precision="1"/>
      </section>
    </article>

    <!-- quarantine -->
    <h2>Quarantine</h2>
    <article>
      <section>
        <UiOutput label="Calculate">
          <select v-model="form.mode" name="requirement" id="requirement">
            <option value="paper">Paper</option>
            <option value="time">Time</option>
          </select>
        </UiOutput>
      </section>

      <section v-if="form.mode === 'paper'">
        <UiOutput label="Time in quarantine">
          <select v-model="form.daysQuarantined" name="quarantine" id="quarantine">
            <option v-for="period in periods" :value="period.days">{{ period.label }}</option>
          </select>
        </UiOutput>
      </section>

      <section v-else>
        <UiNumber label="Number of rolls hoarded" v-model="form.numRolls" :min="0"/>
      </section>


    </article>

    <!-- result -->
    <div class="result" :data-mode="form.mode">
      <template v-if="form.mode === 'paper'">
        <span class="text">Buy</span>
        <span class="value">{{ rollsRequired }}</span>
        <span class="text">{{ plural(rollsRequired, 'roll') }}</span>
      </template>
      <template v-else>
        <span class="text">You'll last</span>
        <span class="value">{{ timeRequired.value }}</span>
        <span class="text">{{ timeRequired.unit }}</span>
      </template>
    </div>

    <div>
      <button type="reset" class="btn btn-secondary reset" @click="reset">Start again</button>
      <!--      <button type="reset" class="btn btn-secondary reset" @click="reset">Buy now</button>-->
    </div>

  </div>

</template>

<script>
import CalculatorUsage from './CalculatorUsage'
import UiPerson from './UiPerson'
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
    total: 18,
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

    form: {
      mode: 'paper',
      sheetsRoll: 200,
      daysQuarantined: 14,
      numRolls: 16,
    },
  }
}

const units = {
  days: 'days',
  weeks: 'weeks',
  months: 'months',
  years: 'years',
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

    totalSheetsDay () {
      return this.people.reduce((total, person) => {
        total += person.total || 0
        return total
      }, 0)
    },

    daysRoll () {
      const value = this.form.sheetsRoll / this.totalSheetsDay
      return value === Number.POSITIVE_INFINITY ? 0 : value
    },

    rollsRequired () {
      const value = Math.ceil(this.form.daysQuarantined / this.daysRoll)
      return value === Number.POSITIVE_INFINITY ? 0 : value
    },

    timeRequired () {
      let value = Math.ceil(this.form.numRolls * this.daysRoll)
      if (value === Number.POSITIVE_INFINITY) {
        value = 0
      }
      let unit = units.days
      if (value > 365 * 1.5) {
        value = (value / 365).toFixed(2)
        unit = units.years
      } else if (value > 7 * 12) {
        value = (value / (365 / 12)).toFixed(1)
        unit = units.months
      } else if (value > 28) {
        value = Math.ceil(value / 7)
        unit = units.weeks
      }
      return { value, unit }
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

    showPerson (index, scroll = true) {
      this.personId = this.people[index].id
      this.$refs.usage.setData(this.getPerson().data)
      if (scroll) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400)
      }
    },

    removePerson (index) {
      const person = this.people.splice(index, 1).shift()
      if (person.id === this.personId) {
        this.showPerson(index - 1, false)
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

    span.value {
      vertical-align: middle;
      font-size: 2em;
      color: #df0f1b;
      padding: 0 .1em;
      line-height: 1em;
    }

    span {
      display: block;
    }
  }

  @media only screen and (min-width: 600px) {
    .result {
      &[data-mode=paper] {
        font-size: 5rem;
      }

      &[data-mode=time] {
        font-size: 4rem;
      }

      span {
        display: inline;
      }
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
    content: ': ';
    color: #212529;
  }
}

</style>

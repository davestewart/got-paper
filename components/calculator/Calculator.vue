<template>
  <div class="calculator">
    <!-- alert -->
    <client-only>
      <UiAlert v-if="options.welcome" class="mb-4" @close="options.welcome = false">
        {{ $t('prompts.buttonTip') }}
      </UiAlert>
    </client-only>

    <LanguageSwitcher/>

    <!-- usage -->
    <div style="position: relative">
      <a id="usage" style="position: absolute; top: -15px"/>
    </div>
    <h2 class="d-flex justify-content-between">
      <span>{{ $t('headings.usage') }}<template v-if="person.name && people.length > 1"><span class="detail">{{ person.name }}</span></template></span>
    </h2>
    <CalculatorUsage ref="usage" :show-totals="options.totals" @change="onUsageChange"/>

    <!-- people -->
    <h2>{{ $t('headings.people') }}<span v-if="people.length > 1" class="detail">{{ people.length }}</span></h2>
    <article>
      <UiPerson
        v-for="(person, index) in people"
        ref="people"
        :key="person.id"
        v-model="person.name"
        :active="person.id === personId"
        :total="person.total"
        :removable="index > 0"
        @click="showPerson(index)"
        @remove="removePerson(index)"
      />
      <button class="btn btn-link" @click="addPerson">
        {{ $t('actions.addPerson') }}
      </button>
    </article>

    <!-- paper -->
    <h2>{{ $t('headings.paper') }}</h2>
    <article>
      <section>
        <UiNumber v-model="form.sheetsRoll" :label="$t('labels.sheetsPerRoll')" :hint="$t('labels.packInformation')" :step="10" :min="100"/>

        <UiOutput v-if="options.totals" v-model="daysRoll" label="Days per roll" :precision="1"/>

      </section>

    </article>

    <!-- quarantine -->
    <h2>{{ $t('headings.quarantine') }}</h2>
    <article>

      <section>
        <UiOutput :label="$t('labels.calculation')">
          <select v-model="form.mode">
            <option v-for="(label, key) in optionsModes" :key="key" :value="key">
              {{ label }}
            </option>
          </select>
        </UiOutput>
      </section>

      <section v-if="form.mode !== 'hoarding'">
        <UiOutput :label="$t('labels.timeInQuarantine')">
          <select v-model="form.daysQuarantined">
            <option v-for="duration in optionsDurations" :key="duration.label" :value="duration.days">
              {{ duration.label }}
            </option>
          </select>
        </UiOutput>
      </section>

      <section v-if="form.mode !== 'buying'">
        <UiNumber v-model="form.rollsBought" :label="$t('labels.rollsBought')" :min="0"/>
      </section>

    </article>

    <!-- result -->
    <div class="result" :data-mode="form.mode">
      <div v-if="form.mode === 'buying'" v-html="htmlBuy">
<!--
        <span class="text">Buy</span>
        <span class="value">{{ rollsRequired }}</span>
        <span class="text">{{ plural(rollsRequired, 'roll') }}</span>
-->
      </div>

      <template v-if="form.mode === 'sharing'">
        <div v-html="htmlShare">
<!--
          <span class="text">{{ rollsOverall > 0 ? 'Share' : 'Buy' }}</span>
          <span class="value">{{ Math.abs(rollsOverall) }}</span>
          <span class="text">{{ plural(rollsOverall, 'roll') }}</span>
-->
        </div>
        <span class="info" v-html="htmlNeed">
<!--
          <span class="info">You need {{ rollsRequired }} {{ plural(rollsRequired, 'roll') }}</span>
-->
        </span>
      </template>

      <div v-if="form.mode === 'hoarding'" v-html="htmlTime">
<!--
        <span class="text">You'll last</span>
        <span class="value">{{ timeRequired.value }}</span>
        <span class="text">{{ timeRequired.unit }}</span>
-->
      </div>
    </div>

    <div class="button-container">
      <a class="btn btn-primary w-100" target="_blank" href="https://www.amazon.co.uk/gp/search?ie=UTF8&tag=gotpaper-21&linkCode=ur2&linkId=39896c3b99b347027d53d0de81e051cf&camp=1634&creative=6738&index=grocery&keywords=toilet roll">{{ $t('cta.buy') }}</a>
      <img
        src="//ir-uk.amazon-adsystem.com/e/ir?t=gotpaper-21&l=ur2&o=2"
        width="1"
        height="1"
        border="0"
        alt=""
        style="border:none !important; margin:0 !important;"
      >
      <button type="reset" class="btn btn-secondary reset mt-2" @click="reset">
        {{ $t('cta.restart') }}
      </button>
    </div>
  </div>
</template>

<script>
import { clone } from '@/utils/object'
import storage from '@/utils/storage'
import assignDeep from 'assign-deep'
import LanguageSwitcher from '../global/LanguageSwitcher'
import CalculatorUsage from './CalculatorUsage'
import UiPerson from './UiPerson'
import { getPaperData } from './utils'

function time (key, label, days) {
  return {
    days,
    key,
    label
  }
}

const durations = [
  time('twoWeeks', 'Two weeks', 14),
  time('threeWeeks', 'Three weeks', 21),
  time('oneMonth', 'One month', 365 / 12),
  time('sixWeeks', 'Six weeks', 6 * 7),
  time('twoMonths', 'Two months', 365 / 6),
  time('threeMonths', 'Three months', 365 / 4),
  time('sixMonths', 'Six months', 365 / 2),
  time('nineMonths', 'Nine months', 365 * 0.75),
  time('oneYear', 'One year', 365)
]

const options = {
  welcome: true,
  totals: false
}

function makePerson (name) {
  return {
    id: Date.now(),
    name,
    data: getPaperData(),
    total: 18
  }
}

function getData (name) {
  const person = makePerson(name)
  return {
    personId: person.id,
    people: [
      person
    ]
  }
}

export default {
  components: {
    LanguageSwitcher,
    CalculatorUsage,
    UiPerson
  },

  data () {
    return {
      labels: {
        durations,
        modes: {
          buying: 'Buying',
          sharing: 'Sharing',
          hoarding: 'Hoarding',
        }
      },
      options,
      ...getData(this.$t('labels.personYou')),
      form: {
        mode: this.$route.query.mode || 'buying',
        sheetsRoll: 200,
        rollsBought: 0,
        daysQuarantined: 14
      }
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

    rollsToShare () {
      return Math.max(0, this.form.rollsBought - this.rollsRequired)
    },

    rollsOverall () {
      return this.form.rollsBought - this.rollsRequired
    },

    timeRequired () {
      let value = Math.ceil(this.form.rollsBought * this.daysRoll)
      if (value === Number.POSITIVE_INFINITY) {
        value = 0
      }
      let unit
      if (value > 365 * 1.5) {
        value = (value / 365).toFixed(2)
        unit = 'years'
      } else if (value > 7 * 12) {
        value = (value / (365 / 12)).toFixed(1)
        unit = 'months'
      } else if (value > 28) {
        value = Math.ceil(value / 7)
        unit = 'weeks'
      } else {
        unit = 'days'
      }
      return {
        html: this.$tc(`results.${unit}`, value),
        value,
        unit,
      }
    },

    optionsModes () {
      return Object.keys(this.labels.modes).reduce((output, key) => {
        output[key] = this.$t(`modes.${key}`)
        return output
      }, {})
    },

    optionsDurations () {
      return clone(durations).map((duration) => {
        duration.label = this.$t(`durations.${duration.key}`)
        return duration
      })
    },

    htmlBuy () {
      return getResultHtml(this.$tc('results.buy', this.rollsRequired))
    },

    htmlShare () {
      const absValue = Math.abs(this.rollsOverall)
      const text = this.rollsOverall > 0
        ? this.$tc('results.share', absValue)
        : this.$tc('results.buy', absValue)
      return getResultHtml(text)
    },

    htmlNeed () {
      return this.$tc('results.need', this.rollsRequired)
    },

    htmlTime () {
      return getResultHtml(this.timeRequired.html)
    },
  },

  watch: {
    personId (value) {
      if (!value) {
        this.addPerson()
      }
    },

    options: {
      deep: true,
      handler (value) {
        storage.set('options-data', value)
      }
    },

    $data: {
      deep: true,
      handler: 'save'
    }
  },

  created () {
    if (process.client) {
      const options = storage.get('options-data')
      if (options) {
        this.options = options
      }
    }
  },

  mounted () {
    this.load()
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
      const person = makePerson(this.$tc('labels.personNum', index))
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
          document.querySelector('main').scrollIntoView({ behavior: 'smooth' })
        }, 250)
      }
    },

    removePerson (index) {
      const person = this.people.splice(index, 1).shift()
      if (person.id === this.personId) {
        this.showPerson(index - 1, false)
      }
    },

    load () {
      if (process.client) {
        const data = storage.get('paper-data')
        if (data) {
          assignDeep(this, data)
          this.$refs.usage.setData(this.getPerson().data)
        }
      }
    },

    save () {
      const { personId, people, form } = this
      storage.set('paper-data', {
        personId,
        people,
        form
      })
    },

    reset () {
      this.$refs.usage.reset()
      Object.assign(this, getData(this.$t('labels.personYou')))
      window.scrollTo(0, 0)
    },

    plural (value, single) {
      if (value !== 1) {
        single += 's'
      }
      return `${single}`
    }
  }
}

function getResultHtml (text = '') {
  const [a, b, c] = text.replace(/(\d+(?:\.\d+)?)/, '|$1|').split('|')
  return `<span class="text">${a}</span><span class="value">${b || '?'}</span><span class="text">${c}</span>`
}

</script>

<style lang="scss">
.calculator {
  position: relative;

  .locale {
    position: absolute;
    right: -7px;
    top: -1.3rem;
  }

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

  select {
    max-width: 150px;
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

    span.info {
      display: block;
      margin-top: 1rem;
      font-size: 1.5rem;
      line-height: 1em;
      color: #AAA;
    }

    &[data-mode=hoarding] {
      span {
        display: block;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .result {
      &[data-mode=buying],
      &[data-mode=sharing] {
        font-size: 5rem;
      }

      &[data-mode=hoarding] {
        font-size: 4rem;
      }

      span {
        display: inline;
      }
    }
  }

  .button-container {
    margin-top: 70px;

    .btn {
      width: 100%;
      font-family: brandon-grotesque, sans-serif;
      font-weight: 700;
      font-size: 1.2em;
    }
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

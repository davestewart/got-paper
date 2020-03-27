<template>
  <div class="calculator">

    <!-- alert -->
    <client-only>
      <div class="mt-4">
        <UiAlert v-if="options.buttonTip" class="mb-4" @close="options.buttonTip = false">
          {{ $t('prompts.buttonTip') }}
        </UiAlert>
      </div>

    </client-only>

    <!-- usage -->
    <div style="position: relative">
      <a id="usage" style="position: absolute; top: -12px"/>
    </div>
    <h2 class="d-flex justify-content-between">
      <span>{{ $t('headings.usage') }}
        <template v-if="people.length > 1">
          <span class="detail">{{ displayName }}</span>
        </template>
      </span>
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
        :index="index"
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
      <!-- buy -->
      <div v-if="form.mode === 'buying'" v-html="htmlBuy"></div>

      <!-- share -->
      <template v-if="form.mode === 'sharing'">
        <div v-html="htmlShare"></div>
        <span class="info" v-html="htmlNeed"></span>
      </template>

      <!-- hoard -->
      <div v-if="form.mode === 'hoarding'" v-html="htmlTime"></div>
    </div>

    <div class="button-container">
      <button type="reset" class="btn btn-primary reset mt-2" @click="reset">
        {{ $t('cta.restart') }}
      </button>
    </div>
  </div>
</template>

<script>
import { clone } from '@/utils/object'
import storage from '@/utils/storage'
import assignDeep from 'assign-deep'
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
  buttonTip: true,
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

function getData (name = '') {
  const person = makePerson(name)
  return {
    personId: person.id,
    people: [
      person
    ]
  }
}
function makeWatch (handler) {
  return {
    deep: true,
    handler
  }
}

export default {
  components: {
    CalculatorUsage,
    UiPerson
  },

  data () {
    return {
      // IMPORTANT! Update this number each time there is a change in saved data
      version: 2,
      labels: {
        durations,
        modes: {
          buying: 'Buying',
          sharing: 'Sharing',
          hoarding: 'Hoarding',
        }
      },
      options,
      ...getData(),
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

    displayName () {
      const person = this.getPerson()
      const index = this.people.indexOf(person)
      return person.name || this.$tc(index === 0 ? 'labels.personYou' : 'labels.personNum', index + 1)
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
    options: makeWatch('saveOptions'),

    form: makeWatch('save'),

    people: makeWatch('save'),

    personId (value) {
      if (!value) {
        this.addPerson()
      }
      this.save()
    },

    '$i18n.locale' () {
      this.options.buttonTip = true
      this.saveOptions()
    }
  },

  created () {
    this.loadOptions()
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
      // const index = this.people.length + 1
      const person = makePerson('')
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
          document.querySelector('#usage').scrollIntoView({ behavior: 'smooth' })
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
        // only update when the schema matches
        if (data && data.version === this.version) {
          assignDeep(this, data)
          this.$refs.usage.setData(this.getPerson().data)
        }
      }
    },

    save () {
      console.log('saving data')
      const { version, personId, people, form } = this
      storage.set('paper-data', {
        version,
        personId,
        people,
        form
      })
    },

    loadOptions () {
      if (process.client) {
        const options = storage.get('options-data')
        if (options) {
          this.options = options
        }
      }
    },

    saveOptions () {
      storage.set('options-data', this.options)
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

  article {
    border-left: 2px dashed #CCC;
    padding: 10px 0 10px 20px;
    margin: 15px 0 15px 10px;
  }

  .form-group.row:last-child {
    // margin-bottom: 0;
  }

  h3 {
    color: $primary-color;
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
      color: $dark-red;
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

    &[data-mode=sharing],
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

.detail {
  color: $primary-color;

  &:before {
    content: ': ';
    color: #212529;
  }
}

</style>

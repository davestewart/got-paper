<template>

  <div class="calculator">

    <div class="form-check form-check-right">
      <label for="showTotals">Show totals</label>
      <input type="checkbox" v-model="options.totals" id="showTotals">
    </div>

    <h2>Usage</h2>
    <article>

      <section>
        <h3>Poops</h3>
        <UiNumber label="Poops per day" v-model="poops.poopsDay" :min="1"/>
        <UiNumber label="Wipes per poop" v-model="poops.wipesPoop" :min="1"/>
        <UiNumber label="Sheets per wipe" v-model="poops.sheetsWipe" :min="1"/>
        <UiOutput v-if="options.totals" label="Total poop sheets per day" v-model="poopSheetsDay"/>
      </section>

      <section>
        <h3>Pees</h3>
        <UiNumber label="Pees per day" v-model="pees.peesDay"/>
        <UiNumber label="Sheets per pee" v-model="pees.sheetsPee"/>
        <UiOutput v-if="options.totals" label="Total pee sheets per day" v-model="peeSheetsDay"/>
      </section>

      <section>
        <h3>Extras</h3>
        <UiNumber label="Sheets per day" hint="For daily cleanup" v-model="extras.sheetsDay"/>
        <UiNumber label="Sheets per month" hint="For monthly cleanup" v-model="extras.sheetsMonth"/>
        <UiOutput v-if="options.totals"label="Total extra sheets per day" v-model="extraSheetsDay" :precision="1"/>
      </section>

    </article>

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

    <div class="result">
      Buy <span>{{ rollsRequired }}</span> {{ plural(rollsRequired, 'roll') }}
    </div>

    <div>
      <button type="reset" class="btn btn-secondary reset" @click="reset">Start again</button>
    </div>


  </div>

</template>

<script>
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

function getData () {
  return {
    options: {
      totals: false,
    },

    poops: {
      poopsDay: 1,
      wipesPoop: 6,
      sheetsWipe: 3,
    },

    pees: {
      peesDay: 5,
      sheetsPee: 0,
    },

    extras: {
      sheetsDay: 0,
      sheetsMonth: 0,
    },

    other: {
      sheetsRoll: 200,
      daysQuarantined: 14,
    },
  }
}

export default {
  data () {
    return {
      periods,
      ...getData(),
    }
  },

  computed: {
    poopSheetsDay () {
      const { sheetsWipe, wipesPoop, poopsDay } = this.poops
      return sheetsWipe * wipesPoop * poopsDay
    },

    peeSheetsDay () {
      const { sheetsPee, peesDay } = this.pees
      return sheetsPee * peesDay
    },

    extraSheetsDay () {
      const { sheetsDay, sheetsMonth } = this.extras
      return sheetsDay + (sheetsMonth / 31)
    },

    totalSheetsDay () {
      return (this.poopSheetsDay + this.peeSheetsDay + this.extraSheetsDay)
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

  methods: {
    reset () {
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
  }
}
</style>

<template>

  <div>
    <!--    <h1>Calculator</h1>-->

    <h2>Usage</h2>
    <article>
      <section>
        <h3>Poop</h3>
        <UiNumber label="Sheets per wipe" v-model="sitting.sheetsWipe" :min="1"/>
        <UiNumber label="Wipes per poop" v-model="sitting.wipesPoop" :min="1"/>
        <UiNumber label="Poops per day" v-model="sitting.poopsDay" :min="1"/>
        <UiOutput label="Total sheets, per poop, per day" v-model="sheetsDay"></UiOutput>
      </section>

      <section>
        <h3>Extras</h3>
        <UiNumber label="Extra sheets per day" v-model="extras.sheetsDay"/>
      </section>

      <section>
        <h3>Total</h3>
        <UiOutput label="Total sheets per day" v-model="totalSheetsDay"></UiOutput>
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
        <UiNumber label="Sheets per roll" v-model="other.sheetsRoll" :step="10" :min="100"/>
        <UiOutput label="Days per roll" v-model="daysRoll" :precision="1"/>
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
    sitting: {
      sheetsWipe: 3,
      wipesPoop: 6,
      poopsDay: 1,
    },

    extras: {
      sheetsDay: 0,
    },

    other: {
      sheetsRoll: 160,
      daysQuarantined: 14,
    },
  }
}

export default {
  components: {},

  props: {},

  data () {
    return {
      periods,
      ...getData(),
    }
  },

  computed: {
    sheetsDay () {
      const { sheetsWipe, wipesPoop, poopsDay } = this.sitting
      return sheetsWipe * wipesPoop * poopsDay
    },

    totalSheetsDay () {
      return (this.sheetsDay + this.extras.sheetsDay)
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
article {
  border-left: 2px dashed #CCC;
  padding: 10px 0 10px 20px;
  margin: 15px 0 15px 10px;
}

section {

}

h3 {
  color: #1660A6;
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
</style>

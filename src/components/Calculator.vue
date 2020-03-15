<template>

  <div>
    <h1>Calculator</h1>

    <h2>Usage</h2>
    <article>
      <section>
        <h3>Poop</h3>
        <UiNumber label="Sheets per wipe" v-model="sitting.sheetsWipe"/>
        <UiNumber label="Wipes per poop" v-model="sitting.wipesSitting"/>
        <UiNumber label="Poops per day" v-model="sitting.sittingsDay"/>
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

    <h2>Roll</h2>
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
        <UiNumber label="Sheets per roll" v-model="other.sheetsRoll"/>
        <UiOutput label="Days per roll" v-model="daysRoll" :precision="2"/>
      </section>
    </article>

    <h2>Quarantine</h2>
    <article>
      <section>
        <UiOutput label="Time in quarantine">
          <select v-model="other.daysQuarantined" name="quarantine" id="quarantine">
            <option v-for="period in periods" :value="period.days">{{ period.label }} ({{ Math.floor(period.days) }} days)</option>
          </select>
        </UiOutput>
        <UiOutput class="rollsRequired" label="Rolls required" v-model="rollsRequired" :precision="0"/>
      </section>
    </article>

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

export default {
  components: {},

  props: {},

  data () {
    return {
      periods,

      sitting: {
        sheetsWipe: 3,
        wipesSitting: 6,
        sittingsDay: 2,
      },

      extras: {
        sheetsDay: 0,
      },

      other: {
        sheetsRoll: 160,
        daysQuarantined: 14,
      }
    }
  },

  computed: {
    sheetsDay () {
      const { sheetsWipe, wipesSitting, sittingsDay } = this.sitting
      return sheetsWipe * wipesSitting * sittingsDay
    },

    totalSheetsDay () {
      return (this.sheetsDay + this.extras.sheetsDay)
    },

    daysRoll () {
      return this.other.sheetsRoll / this.totalSheetsDay
    },

    rollsRequired () {
      return Math.ceil(this.other.daysQuarantined / this.daysRoll)
    }
  },

  methods: {},
}

</script>

<style lang="scss">
article {
  margin: 10px 20px;
}

section {

}

.rollsRequired {
  font-size: 2rem;
}
</style>

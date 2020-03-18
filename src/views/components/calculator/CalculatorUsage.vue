<template>

  <div class="calculator__usage">

    <article>

      <section>
        <h3>Poops</h3>
        <UiNumber label="Poops per day" v-model="poops.poopsDay" :min="1"/>
        <UiNumber label="Wipes per poop" v-model="poops.wipesPoop" :min="1"/>
        <UiNumber label="Sheets per wipe" v-model="poops.sheetsWipe" :min="1"/>
        <UiOutput v-if="showTotals" label="Total poop sheets per day" v-model="poopSheetsDay"/>
      </section>

      <section>
        <h3>Pees</h3>
        <UiNumber label="Pees per day" v-model="pees.peesDay"/>
        <UiNumber label="Sheets per pee" v-model="pees.sheetsPee"/>
        <UiOutput v-if="showTotals" label="Total pee sheets per day" v-model="peeSheetsDay"/>
      </section>

      <section>
        <h3>Extras</h3>
        <UiNumber label="Sheets per day" hint="For daily cleanup" v-model="extras.sheetsDay"/>
        <UiNumber label="Sheets per month" hint="For monthly cleanup" v-model="extras.sheetsMonth"/>
        <UiOutput v-if="showTotals" label="Total extra sheets per day" v-model="extraSheetsDay" :precision="1"/>
      </section>

    </article>

  </div>

</template>

<script>
import { getPaperData } from './utils'

export default {
  props: {
    showTotals: {
      type: Boolean,
      default: false,
    }
  },

  data () {
    return getPaperData()
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
  },

  watch: {
    totalSheetsDay: 'onChange'
  },

  mounted () {
    this.reset()
    this.onChange()
  },

  methods: {
    setData (data) {
      Object.assign(this, data)
    },

    reset () {
      this.setData(getPaperData())
    },

    onChange () {
      this.$emit('change', this.totalSheetsDay, this.$data)
    }
  },
}

</script>

<template>
  <div class="calculator__usage">
    <article>
      <section>
        <h3>Poops</h3>
        <UiNumber v-model="poops.poopsDay" label="Poops per day" :min="1" />
        <UiNumber v-model="poops.wipesPoop" label="Wipes per poop" :min="1" />
        <UiNumber v-model="poops.sheetsWipe" label="Sheets per wipe" :min="1" />
        <UiOutput v-if="showTotals" v-model="poopSheetsDay" label="Total poop sheets per day" />
      </section>

      <section>
        <h3>Pees</h3>
        <UiNumber v-model="pees.peesDay" label="Pees per day" />
        <UiNumber v-model="pees.sheetsPee" label="Sheets per pee" />
        <UiOutput v-if="showTotals" v-model="peeSheetsDay" label="Total pee sheets per day" />
      </section>

      <section>
        <h3>Extras</h3>
        <UiNumber v-model="extras.sheetsDay" label="Sheets per day" hint="For daily cleanup" />
        <UiNumber v-model="extras.sheetsMonth" label="Sheets per month" hint="For monthly cleanup" />
        <UiOutput v-if="showTotals" v-model="extraSheetsDay" label="Total extra sheets per day" :precision="1" />
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
      default: false
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
    }
  },

  watch: {
    totalSheetsDay: 'onChange'
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
  }
}

</script>

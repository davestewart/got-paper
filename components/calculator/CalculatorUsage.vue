<template>
  <div class="calculator__usage">
    <article>
      <!-- <p class="hint m-0">{{ $t('headings.usageHint') }}</p>-->
      <section>
        <h3>{{ $t('subHeadings.poops') }}</h3>
        <UiNumber v-model="poops.poopsDay" :label="$t('labels.poopsPerDay')" :min="1" />
        <UiNumber v-model="poops.wipesPoop" :label="$t('labels.wipesPerPoop')" :min="1" />
        <UiNumber v-model="poops.sheetsWipe" :label="$t('labels.sheetsPerWipe')" :min="1" />
        <UiOutput v-if="showTotals" v-model="poopSheetsDay" :label="$t('labels.poopSheetsPerDay')" />
      </section>

      <section>
        <h3>{{ $t('subHeadings.pees') }}</h3>
        <UiNumber v-model="pees.peesDay" :label="$t('labels.peesPerDay')" />
        <UiNumber v-model="pees.sheetsPee" :label="$t('labels.sheetsPerPee')" />
        <UiOutput v-if="showTotals" v-model="peeSheetsDay" :label="$t('labels.peeSheetsPerDay')" />
      </section>

      <section>
        <h3>{{ $t('subHeadings.extras') }}</h3>
        <UiNumber v-model="extras.sheetsDay" :label="$t('labels.sheetsPerDay')" :hint="$t('labels.forDailyCleanup')" />
        <UiNumber v-model="extras.sheetsMonth" :label="$t('labels.sheetsPerMonth')" :hint="$t('labels.forMonthlyCleanup')" />
        <UiOutput v-if="showTotals" v-model="extraSheetsDay" :label="$t('labels.extraSheetsPerDay')" :precision="1" />
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

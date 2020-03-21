<template>
  <div id="app">
    <SiteHeader />

    <main class="inner">
      <KeepAlive>
        <Nuxt />
      </KeepAlive>
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/global/SiteHeader'
import SiteFooter from '@/components/global/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

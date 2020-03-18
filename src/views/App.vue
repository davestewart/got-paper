<template>
  <div id="app">
    <SiteHeader/>

    <main class="inner">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>

    <SiteFooter/>

  </div>
</template>

<script>
import ShareLinks from 'components/global/ShareLinks'
import SiteHeader from 'components/global/SiteHeader'
import SiteFooter from 'components/global/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    ShareLinks,
  },
}
</script>

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
import ShareLinks from './components/ShareLinks'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    ShareLinks,
  },
}
</script>

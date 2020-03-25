<template>
  <div id="app">
    <SiteHeader />

    <main class="inner">
      <KeepAlive>
        <Nuxt />
      </KeepAlive>
    </main>

    <SiteFooter />
    <portal-target name="modals" />
  </div>
</template>

<script>
import SiteHeader from '@/components/global/SiteHeader'
import SiteFooter from '@/components/global/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    const baseUrl = process.env.baseUrl
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`
    return {
      htmlAttrs: i18nSeo.htmlAttrs,
      meta: [
        ...i18nSeo.meta,
        { hid: 'description', name: 'description', content: this.$t('site.description') }
      ],
      link: [
        { rel: 'canonical', href: `${baseUrl}${pathWithSlash}` },
        ...i18nSeo.link
      ]
    }
  },
}
</script>

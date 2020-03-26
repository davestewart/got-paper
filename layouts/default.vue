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
    const title = this.$t('site.title')
    const description = this.$t('site.description')
    const url = `${baseUrl}${pathWithSlash}`
    return {
      htmlAttrs: i18nSeo.htmlAttrs,
      meta: [
        ...i18nSeo.meta,
        { hid: 'title', name: 'title', content: title },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:url', name: 'og:url', content: url },
      ],
      link: [
        { rel: 'canonical', href: url },
        ...i18nSeo.link
      ]
    }
  },
}
</script>

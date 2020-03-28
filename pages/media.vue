<template>
  <div class="page page__media">

    <section>
      <h1>Videos</h1>
      <p>Got Paper is available in <a href="/translations">{{ $i18n.locales.length }} languages</a>.</p>
      <div class="embed">
        <iframe
          v-proportion="9 / 16"
          width="100%"
          src="https://www.youtube.com/embed/z1726EC9H_Q"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section>
      <h1>Screenshots</h1>
      <p>Got Paper looks great as well as being useful.</p>
      <Gallery/>
    </section>

    <section>
      <h1>Brand</h1>
      <p>Who doesn't love a pun when wiping their bum?</p>
      <img src="/images/ui/splash.png" alt="The Got Paper logo" class="screenshot" >
      <p>The domain.com</p>
      <img src="/images/social/domain-og.png" alt="The Got Paper domain" class="screenshot" >
    </section>

  </div>
</template>

<script>
import Gallery from '@/components/gallery/Gallery'
export default {
  components: {
    Gallery
  }
}
</script>

<style lang="scss">
.page__media {
  p {
    margin: 1rem 0 .5rem;
  }

  .screenshot {
    display: block;
    width: 100%;
  }
}
</style>

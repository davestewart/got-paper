<template>
  <div class="page page__media">

    <section>
      <h1>Videos</h1>
      <p>Got Paper has gone multilingual – currently supporting <a href="/translations">{{ $i18n.locales.length }} languages</a>!</p>
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
      <p>Got Paper looks great as well as being useful!</p>
      <Gallery/>
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

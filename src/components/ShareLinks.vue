<template>
  <div class="share-buttons">
    <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
       title="Share on Facebook"
       target="_blank"><img alt="Share on Facebook" src="/images/sharing/Facebook.svg"/></a>
    <a :href="`https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=${hashtags}&via=dave_stewart`"
       target="_blank"
       title="Tweet"><img alt="Tweet" src="/images/sharing/Twitter.svg"/></a>
    <a :href="`https://plus.google.com/share?url=${url}`"
       target="_blank"
       title="Share on Google+"><img alt="Share on Google+" src="/images/sharing/Google+.svg"/></a>
    <a :href="`http://pinterest.com/pin/create/button/?url=${url}&description=${title}`"
       target="_blank"
       title="Pin it"><img alt="Pin it" src="/images/sharing/Pinterest.svg"/></a>
    <a :href="`https://getpocket.com/save?url=${url}&title=${title}`"
       target="_blank"
       title="Add to Pocket"><img alt="Add to Pocket" src="/images/sharing/Pocket.svg"/></a>
    <a :href="`http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}&source=${source}`"
       target="_blank"
       title="Share on LinkedIn"><img alt="Share on LinkedIn" src="/images/sharing/LinkedIn.svg"/></a>
    <a :href="`mailto:?subject=${title}&body=${url}`"
       target="_blank"
       title="Send email"><img alt="Send email" src="/images/sharing/Email.svg"/></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: encodeURIComponent('https://got-paper.netlify.com'),
      title: encodeURIComponent('Calculate how much toilet paper you need'),
      source: encodeURIComponent(location.hostname),
      summary: '',
      hashtags: 'coronavirus',
    }
  }
}
</script>

<style lang="scss">
.share-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .sr-only {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  a {
    display: inline-block;
    padding: 8px;
  }

  img {
    width: 32px;
  }
}

</style>

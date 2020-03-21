<template>
  <div class="page page__404">
    <h1>404</h1>
    <section>
      <p>This is not the page you're looking for...</p>
      <p>Try these instead:</p>
      <ul>
        <li>
          <NuxtLink to="/">
            The "Got Paper" App
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'This page is lost!'
    }
  }
}
</script>

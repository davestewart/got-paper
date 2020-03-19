<template>
  <div class="page page__404">
    <h1>404</h1>
    <section>
      <p>This is not the page you're looking for...</p>
      <p>Try these instead:</p>
      <ul>
        <li><router-link to="/app">The "Got Paper" App</router-link></li>
        <li><router-link to="/">Home page</router-link></li>
      </ul>
    </section>

  </div>
</template>

<style>
.page__404 section {
  margin: 1.5rem 0;
}
</style>

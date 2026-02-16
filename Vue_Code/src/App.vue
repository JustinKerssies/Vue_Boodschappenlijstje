<script setup>
</script>

<template>
  <p> nav here</p>
  <nav>
    <RouterLink to="/create">go to create</RouterLink>
    <RouterLink to="/overview">go to overview</RouterLink>
  </nav>
  <p> view here</p>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>

</style>

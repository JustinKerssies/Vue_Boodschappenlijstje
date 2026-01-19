<script setup>
import {ref} from 'Vue'

const groceryArray = ref([
  {'index' : 1, "product": "cups", "bought": False},
  {'index' : 2, "product": "hats", "bought": False},
  {'index' : 3, "product": "vibes", "bought": False},
])
</script>

<template>
<ul>
  <li v-for="value in groceryArray" >
    <p> {{ value.product }}</p>
  </li>
</ul>
</template>

<style scoped>

</style>

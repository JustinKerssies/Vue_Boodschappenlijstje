<script setup>
import {ref, computed} from 'vue'

const inputValue = ref()
const indexMarker = ref(3)
const grocerylist = ref([
  {"index": 1, "product": "cups",  "amount": 5, "bought": false},
  {"index": 2, "product": "hats",  "amount": 4, "bought": false},
  {"index": 3, "product": "vibes", "amount": 3,  "bought": false}
])

const addToList = (product) => {
  indexMarker.value += 1 
  grocerylist.value.push({"index": indexMarker.value, "product" : product, "amount" : 1, "bought": false})
}

const removeFromList = (product) => {
  grocerylist.value = grocerylist.value.filter(obj => obj != product)
}

const sum = computed(() => {
  let sum = 0
  for (let index = 0; index < grocerylist.value.length; index++) {
    if (grocerylist.value[index]['amount'] != ""){
      sum += grocerylist.value[index]['amount']
  }}
  return sum
})
</script>

<template>
  <table>
    <tr>
      <th>Index</th>
      <th>product</th>
      <th>amount</th>
    </tr>
    <tr v-for="item in grocerylist">
      <td> {{ item.index }} </td>
      <td> {{ item.product }} </td>
      <td> <input type="text" v-model.number="item.amount"></td>
      <td> <button type="button" v-on:click="removeFromList(item)">x</button></td>
    </tr>
  </table>
  <p> {{ sum }}</p>
  <input type="text" v-model="inputValue"/>
  <button v-on:click="addToList(inputValue)"> add</button>
</template>

<style scoped>

</style>

<script setup>
import GroceriesTable from './components/GroceriesTable.vue'
import {ref, watch} from 'vue'

const removeMarker = ref(false)
const inputProduct = ref('')
const inputValue = ref(0)
const indexMarker = ref(3)
const grocerylist = ref([
  {"index": 1, "product": "cups", "value": 1.99, "amount": 5, },
  {"index": 2, "product": "hats", "value": 15, "amount": 4, },
  {"index": 3, "product": "vibes","value": 0, "amount": 3,  }
])

const addToList = () => {
  if (inputProduct.value != "") {
    indexMarker.value += 1 
    grocerylist.value.push({
      "index": indexMarker.value, 
      "product" : inputProduct.value, 
      "amount" : 1, 
      "value": inputValue.value, })
  } else {
    alert('insert product name')
  }
}

const removeFromList = product => {
  grocerylist.value = grocerylist.value.filter(obj => obj != product)
}
const removeTrigger = () => {
  removeMarker.value = !removeMarker.value
}

</script>

<template>
   <table>
    <td> product <input type="text" v-model="inputProduct"/> </td>
    <td> price <input type="number" v-model="inputValue"/> </td>
    <td> <button v-on:click="addToList()"> add</button></td>
  </table>
  <GroceriesTable :listProp="grocerylist" :removeProp="removeMarker" @removeProduct="removeFromList"> </GroceriesTable>
  <td> <button v-on:click="removeTrigger()">remove</button></td>
</template>

<style scoped>

</style>

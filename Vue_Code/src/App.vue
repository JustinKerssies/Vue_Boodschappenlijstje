<script setup>
import {ref, computed} from 'vue'

const inputProduct = ref('')
const inputValue = ref(0)
const indexMarker = ref(3)
const removeMarker = ref(false)
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

const removeFromList = (product) => {
  grocerylist.value = grocerylist.value.filter(obj => obj != product)
}

const subTotalValue = (item) => {
  return item['amount']  * item['value']
}
const removeTrigger = () => {
  removeMarker.value = !removeMarker.value
}

const sumTotal = computed(() => {
  let sum = 0
  for (let index = 0; index < grocerylist.value.length; index++) {
    sum += subTotalValue(grocerylist.value[index]); 
  } return sum
})
</script>

<template>
  <table>
    <td> product <input type="text" v-model="inputProduct"/> </td>
    <td> price <input type="number" v-model="inputValue"/> </td>
    <td> <button v-on:click="addToList()"> add</button></td>
  </table>
  <table>
    <tr>
      <th>Index</th>
      <th>product</th>
      <th>price</th>
      <th>amount</th>
      <th>subTotal</th>
    </tr>
    <tr v-for="item in grocerylist">
      <td> {{ item.index }} </td>
      <td> {{ item.product }} </td>
      <td> {{ item.value }} </td>
      <td> <input type="number" v-model.number="item.amount"></td>
      <td> {{ subTotalValue(item) }} </td>
      <td> <button type="button" v-on:click="removeFromList(item)" v-if="removeMarker">x</button></td>
    </tr>
  </table>
  <p> {{ sumTotal }}</p>
  <td> <button v-on:click="removeTrigger()">remove</button></td>
</template>

<style scoped>

</style>

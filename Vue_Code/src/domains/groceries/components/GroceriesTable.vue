<script setup>
import {ref, computed} from 'vue'

const props = defineProps({
  listProp: {
    type: Object,
    default: () => ref([])
  },
  removeProp: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits (['removeProduct'])
const removeFromList = (product) => {
  emit('removeProduct', product)
}

const subTotalValue = (item) => {
  return item['amount']  * item['value']
}

const sumTotal = computed(() => {
  let sum = 0
  for (let index = 0; index < props.listProp.length; index++) {
    sum += subTotalValue(props.listProp[index]); 
  } return sum
})

</script>

<template>
  <table>
    <tr>
      <th>Index</th>
      <th>product</th>
      <th>price</th>
      <th>amount</th>
      <th>subTotal</th>
    </tr>
    <tr v-for="item in listProp">
      <td> {{ item.index }} </td>
      <td> {{ item.product }} </td>
      <td> {{ item.value }} </td>
      <td> <input type="number" v-model.number="item.amount"></td>
      <td> {{ subTotalValue(item) }} </td>
      <td> <button type="button" v-on:click="removeFromList(item)" v-if="removeProp">x</button></td>
    </tr>
  </table>
  <p> {{ sumTotal }}</p>
</template>

<style scoped>

</style>
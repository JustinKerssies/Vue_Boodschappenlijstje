<script setup>
import {ref} from 'vue'
import { getAllGroceries } from '../store';

const groceries = getAllGroceries

</script>

<template>
  <table>
    <tr>
      <th> ID </th>
      <th> Product </th>
      <th> Value </th>
      <th> Amount </th>
    </tr>
    <tr v-for="grocery in groceries">
      <td>{{ grocery.id }}</td>
      <td>{{ grocery.product }}</td>
      <td>{{ grocery.price }}</td>
      <td>{{ grocery.amount }}</td>      
    </tr>

  </table>

</template>

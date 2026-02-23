<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { AddGrocery } from '../store';

const grocery = {product: '', price:0, amount:0}
</script>

<template>
    <GroceryForm :grocery-prop="grocery" @submit=" (submit) => AddGrocery(submit)"/>
</template>
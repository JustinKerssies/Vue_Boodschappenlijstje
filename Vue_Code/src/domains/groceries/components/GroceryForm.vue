<script setup>
const props = defineProps({
    groceryProp: {
        type: Object,
        default:{
            id:1,
            product:'cookies',
            price:0,
            amount:0
        }
    }
})

const current_grocery = props.groceryProp
const emit = defineEmits(['submit'])
</script>

<template>
    {{ current_grocery }}
    <form>
        <label>Product</label><input type="text">
        <label>Value</label><input type="number" >
        <label>Amount</label><input type="number">
        <button type="button" v-on:click="emit('submit', current_grocery)">submit</button>
    </form>
</template>
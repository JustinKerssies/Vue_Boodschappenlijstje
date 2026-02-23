import {ref, computed} from 'vue'

const grocerylist = ref([
  {"id": 1, "product": "cups", "price": 1.99, "amount": 5, },
  {"id": 2, "product": "hats", "price": 15, "amount": 4, },
  {"id": 3, "product": "vibes","price": 0, "amount": 3,  }
])

export const getAllGroceries = computed(() => grocerylist.value)
export const getGroceryById = (id) => computed(() => grocerylist.value.find(grocery => grocery.id == id))
const new_id = () => {
    return grocerylist.value.length + 1
}
export const AddGrocery = (grocery) => {
    grocery.id = new_id()
    grocerylist.value.push(grocery)
    console.log(grocerylist.value)
}


<script setup lang="ts">
const { newIngredient } = defineProps<{
  newIngredient: {
    ingredient: null | {
      id: number;
      name: string;
    };
    type: null | {
      id: number;
      name: string;
    };
    amount: null | number;
  };
}>();

interface SelectEvent extends Event {
    target: HTMLSelectElement;
}
const handleTypeChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const selectedType = target.value;
    const ingredient = data.value?.find(item => item.name === selectedType)
    if(!ingredient) return
    console.log(ingredient);
    newIngredient.type = ingredient
}

const { data, error, refresh } = await useFetch("/api/type");
</script>

<template>
  <div v-if="!!newIngredient.ingredient">
    <input 
        type="number" 
        placeholder="10" 
        v-model="newIngredient.amount"
    />
    <select
    @change="handleTypeChange"
    >
      <option
        v-for="ingredientType of data"
        :value="ingredientType.name"
        class="capitalize"
        >
        {{ ingredientType.name }}
      </option>
    </select>
  </div>
</template>

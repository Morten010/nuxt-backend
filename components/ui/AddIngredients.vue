<script setup lang="ts">
import { reactive } from "vue";

const { recipe } = defineProps<{
  recipe: {
    name: string;
    description: string;
    ingredients: {
      ingredient: null | {
        id: number;
        name: string;
      };
      type: null | {
        id: number;
        name: string;
      };
      amount: null | number;
    }[];
  };
}>();

const open = ref(false);
const newIngredient = reactive<{
  ingredient: null | {
    id: number;
    name: string;
  };
  type: null | {
    id: number;
    name: string;
  };
  amount: null | number;
}>({
  amount: null,
  ingredient: null,
  type: null,
});

const handleChange = () => {
    console.log(newIngredient);
    
    recipe.ingredients = [
        ...recipe.ingredients,
        {
            ...newIngredient
        }
    ];

    newIngredient.amount = null
    newIngredient.ingredient = null
    newIngredient.type = null
    open.value = false
};

console.log(recipe);


const { data, error, refresh } = await useFetch("/api/ingredient");
</script>

<template>

  <section>

    <div
      class="flex justify-between"
    >
      <h1
          class="text-2xl font-bold text-green-950"
      >
          Ingredienser
      </h1>
      <button
        class="aspect-square max-w-14 border text-2xl grid place-content-center hover:opacity-80 cursor-pointer w-8"
        @click="open = true">
        <Icon name="iconoir:plus" />
      </button>
    </div>

    <ul
        class="flex gap-2 mb-4"
    > 
        <li 
            v-if="recipe.ingredients[0]"
            v-for="ing of recipe.ingredients"
        >
            {{ ing.ingredient?.name }}
            {{ ing.amount }} {{ ing.type?.name }}
        </li>
    </ul>
  </section>


  <teleport to="body" v-if="open">
    <div
      class="fixed top-0 left-0 w-full h-screen bg-black/20 backdrop-blur flex items-center justify-center z-20"
      @click="open = false">
      <div
        class="bg-white border p-2 rounded min-w-[300px]"
        @click="(e) => e.stopPropagation()"
      >
        <ul class="flex gap-2">
            <li
                v-for="ingredient of data"
                :class="`p-2 cursor-pointer hover:bg-gray-200 rounded ${
                newIngredient.ingredient?.name === ingredient.name
                    ? 'bg-gray-200'
                    : ''
                }`"
                @click="newIngredient.ingredient = ingredient">
                {{ ingredient.name }}
            </li>
        </ul>
        <UiAddIngredientType :new-ingredient="newIngredient" />
        <button @click="handleChange">Tilføj</button>
      </div>
    </div>
  </teleport>
</template>

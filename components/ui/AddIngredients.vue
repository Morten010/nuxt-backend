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
const openIngredient = ref(false);
const ingredientSearch = ref("");

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

  <!-- Ingredients -->
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
        type="button"
        class="aspect-square max-w-14 border text-2xl grid place-content-center hover:opacity-80 cursor-pointer w-8"
        @click="open = true"
      >
        <Icon name="iconoir:plus" />
      </button>
    </div>

    <ul
        class="flex flex-col gap-2 mb-4 list-disc list-inside mt-3"
    > 
      <li
        v-if="recipe.ingredients.length === 0"
        class="w-full text-center my-4"
      >
        Ingen ingredienser endnu <span
          class="text-green-500"
          @click="open = true"
        >
          tilføj en
        </span>
      </li>
        <li 
            v-if="recipe.ingredients[0]"
            v-for="ing of recipe.ingredients"
        >
            {{ ing.ingredient?.name }}
            {{ ing.amount }} {{ ing.type?.name }}
        </li>
    </ul>
  </section>
  <!-- Ingredients -->


  <!-- modal -->
  <teleport to="body" v-if="open">
    <div
      class="fixed top-0 left-0 w-full h-screen bg-black/20 backdrop-blur flex items-center justify-center z-20"
      @click="open = false"
    >
      <div
        class="bg-white border p-2 rounded min-w-[300px] max-w-[300px]"
        @click="(e) => e.stopPropagation()"
      >
        <!-- ingredient -->
        <div 
          class="border rounded relative z-20"
        >
          <input 
            class="p-2 w-full"
            placeholder="Søg"
            @focus="openIngredient = true"
            v-model="ingredientSearch"
          />
          <ul 
            class="flex flex-col max-h-[200px] overflow-auto absolute bg-white rounded w-full -bottom-2 translate-y-full border"
             v-if="openIngredient"
          >
            <li
                v-for="ingredient in ingredientSearch ? data?.filter(ing => ing.name.toLowerCase().includes(ingredientSearch.toLowerCase())) : data"
                :key="ingredient.id"
                :class="`p-2 cursor-pointer hover:bg-gray-200 rounded ${
                newIngredient.ingredient?.name === ingredient.name
                    ? 'bg-gray-200'
                    : ''
                }`"
                @click="() => {
                  newIngredient.ingredient = ingredient
                  openIngredient = false
                  ingredientSearch = ingredient.name
                }">
                {{ ingredient.name }}
            </li>
          </ul>
        </div>
        <!-- ingredient -->


        <UiIngredientDropDown :new-ingredient="newIngredient" />

        <UiPrimaryButton
          @click="handleChange"
          :class="`mt-2 w-full ${newIngredient.type ? '' : 'opacity-90 cursor-not-allowed'}`"
        >
          Tilføj
        </UiPrimaryButton>
      </div>
    </div>
  </teleport>
  <!-- modal -->

</template>

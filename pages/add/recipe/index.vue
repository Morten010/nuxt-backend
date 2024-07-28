<script setup lang="ts">
    import { reactive } from "vue"

    const recipe = reactive({
        name: "",
        description: "",
        ingredients: [] as {
            ingredient: null | {
                id: number;
                name: string;
            }
            type: null | {
                id: number;
                name: string;
            }
            amount: null | number,
        }[]
    })

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        console.log("added");
        console.log(recipe);
        
    }

</script>

<template>
    <h1
        class="text-2xl font-semibold mb-2"
    >
        Add recipe
    </h1>
    <form
        class="flex flex-col gap-2"
        @submit="handleSubmit"
    >
        <input 
            placeholder="name"
            v-model="recipe.name"
        />
        <input 
            placeholder="description"
            v-model="recipe.description"
        />

        <UiAddIngredients 
            :recipe="recipe"
        />
    
        <button
            @click="console.log(recipe)"
        >
            Tilføj
        </button>
    </form>
</template>
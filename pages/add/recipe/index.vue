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
        class="text-4xl font-bold text-green-950 mb-2"
    >
        Tilføj opskrift
    </h1>

    <form
        class="flex flex-col gap-2"
        @submit="handleSubmit"
    >
        <label
            class="flex flex-col text-sm"
        >
            <span>
                Opskrift navn
            </span>
            <UiInput 
                placeholder="name"
                v-model="recipe.name"
            />
        </label>
        <label
            class="flex flex-col text-sm"
        >
            <span>
                beskrivelse
            </span>
            <UiInput
                placeholder="description"
                v-model="recipe.description"
            />
        </label>


        <UiAddIngredients 
            :recipe="recipe"
        />
    
        <UiPrimaryButton
            @click="console.log(recipe)"
        >
            Tilføj
        </UiPrimaryButton>
    </form>

</template>
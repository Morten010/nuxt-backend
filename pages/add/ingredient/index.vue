<script setup lang="ts">
    import axios from "axios"
    import { ref } from "vue"
    const ingredientName = ref("")

    const handleSubmit = async (event: Event) => {
        event.preventDefault();

        if(!ingredientName) return

        const res = await axios.post("/api/ingredient", {
            name: ingredientName.value.trim().toLowerCase()
        })

        console.log(res);
    }
</script>

<template>
    <h1>
        Add ingredient
    </h1>
    <form
        class="flex flex-col gap-2"
        @submit="(e) => handleSubmit(e)"
    >
        <input 
            class="border"
            placeholder="Tomato"
            v-model="ingredientName"
        />
        <button
            class="bg-green-950 text-white p-2"
            type="submit"
        >
            Add ingredient
        </button>
    </form>
</template>
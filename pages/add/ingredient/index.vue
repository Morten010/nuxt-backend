<script setup lang="ts">
    import axios from "axios"
    import { ref } from "vue"
    import { toast } from "vue-sonner"

    const ingredientName = ref("")

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        console.log(ingredientName.value);
        
        if(!ingredientName.value) return toast.error('Udfyld')

        try{
            const res = await axios.post("/api/ingredient", {
                name: ingredientName.value.trim().toLowerCase()
            })

            console.log(res);
            toast.success(`Tilføjet ${res.data}`)
            ingredientName.value = ""
        }catch{

        }

    }
</script>

<template>
    <h1
        class="text-4xl font-bold text-green-950 mb-2"
    >
        Add ingredient
    </h1>
    <form
        class="flex flex-col gap-2"
        @submit="(e) => handleSubmit(e)"
    >
        <label
        class="w-full"
        >
            <UiInput 
                class="w-full"
                placeholder="Tomato"
                v-model="ingredientName"
            />
        </label>
        <UiPrimaryButton
            type="submit"
            
        >
            Add ingredient
        </UiPrimaryButton>
    </form>
</template>
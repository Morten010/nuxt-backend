<script setup lang="ts">
    const { data, error, refresh } = await useFetch('/api/recipe')
</script>

<template>
    <h1
        class="text-4xl font-bold text-green-950"
    >
        Klar til at lave mad?
    </h1>
    <p
    class="mb-2"
    >
        Velkommen tilbagge
    </p>
    
    <div>
       <ul>
            <li
                v-for="recipe of data"
            >
                {{ recipe.name }}
            </li>
       </ul>
    </div>
</template>
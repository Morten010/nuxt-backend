<script setup lang="ts">
    const { data, error, refresh } = await useFetch('/api/ingredient')
</script>

<template>
    <h1
        class="text-2xl font-semibold"
    >
        Opskrifter
    </h1>
    <p>
        Velkommen tilbagge
    </p>
    <div>
        <h2
            class="text-xl font-semibold"
        >
            Morgenmad
        </h2>
        <p>
            diverse kedelige ting
        </p>
        <ul>
            <li>
                lol
            </li>
        </ul>
    </div>
</template>
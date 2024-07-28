<script setup>
    const model = defineModel()
</script>

<template>
    <input
        class="border p-2 rounded-lg text-base"
        v-model="model"
    />
</template>
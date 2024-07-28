<script setup lang="ts">

</script>

<template>
    <h1
        class="text-4xl font-bold text-green-950 mb-2"
    >
        Tilføj Categori
    </h1>
    <label
        class="flex flex-col gap-1 mb-2"
    >
        <span>
            Categori navn
        </span>
        <UiInput 
            placeholder="Morgenmad"
        />
    </label>
    <UiPrimaryButton
    class="w-full"
    >
        Tilføj
    </UiPrimaryButton>
</template>
<script setup lang="ts">
import { Toaster } from "vue-sonner"

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster 
    rich-colors
    position="top-center"
  />
</template>

<style>
*{
  font-family:Proza Libre;
}
h1, h2{
  font-family: Cormorant Garamond;
}
</style>
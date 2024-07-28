<template>
  <nav class="fixed bottom-0 left-0 w-full bg-green-950 text-white">
    <ul class="flex gap-2 w-full">
      <li class="w-2/4">
        <NuxtLink class="w-full text-center p-4 inline-block" to="/add">
          <Icon name="lucide:plus" size="26" />
        </NuxtLink>
      </li>
      <li class="w-2/4">
        <NuxtLink class="w-full text-center p-4 inline-block" to="/">
          <Icon name="bxs:food-menu" size="26" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

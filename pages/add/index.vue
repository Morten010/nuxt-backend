<template>
    <h1
        class="text-4xl font-semibold mb-2 text-green-950"
    >
        Tilføj
    </h1>
    <p>
        Tilføj diverse ting som ingredienser, categorier og opskrifter
    </p>
    <div
        class="flex flex-col gap-2 mt-4 mb-20"
    >
        <NuxtLink 
            to="/add/recipe"
            class="aspect-video relative group rounded overflow-hidden"
        >
            <NuxtImg 
                src="/images/recipe.webp"
                fill
                class=" absolute w-full h-full object-cover object-top grayscale group-hover:grayscale-0"
            />
            <div
                class="z-20 text-black absolute bottom-0 right-0 p-2 font-semibold text-xl bg-white"
            >
                Tilføj opskrift
            </div>
        </NuxtLink>
        <NuxtLink 
            to="/add/ingredient"
            class="aspect-video relative group rounded overflow-hidden"
        >
            <NuxtImg 
                src="/images/ingredients.webp"
                fill
                class=" absolute w-full h-full object-cover object-top grayscale group-hover:grayscale-0"
            />
            <div
                class="z-20 text-black absolute bottom-0 right-0 p-2 font-semibold text-xl bg-white"
            >
                Tilføj Ingredienser
            </div>
        </NuxtLink>
        <NuxtLink 
            to="/add/category"
            class="aspect-video relative group rounded overflow-hidden"
        >
            <NuxtImg 
                src="/images/recipe.webp"
                fill
                class=" absolute w-full h-full object-cover object-top grayscale group-hover:grayscale-0"
            />
            <div
                class="z-20 text-black absolute bottom-0 right-0 p-2 font-semibold text-xl bg-white"
            >
                Tilføj Category 
            </div>
        </NuxtLink>
    </div>
</template>
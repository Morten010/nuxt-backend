<script lang="ts" setup>
    const {
        fetchUrl,
        moreUrl,
        title
    } = defineProps<{
        title: string
        moreUrl: string
        fetchUrl: string
    }>()
</script>

<template>
    <section
        class="w-full mb-4"
    >
        <!-- top -->
        <div
        class="flex justify-between"
        >
            <h2
                class="text-2xl text-green-950 font-bold"
            >
                {{ title }}
            </h2> 
            <button
                class="font-bold text-green-950 flex items-center gap-2 hover:bg-green-500/10 px-2 rounded transition-colors duration-100"
            >
                Se alle
                <Icon 
                    name="lucide:arrow-right"
                />
            </button>
        </div>
        <!-- top -->

        <div
            class="mt-3 flex gap-2"
        >
            <div>
                <div>
                    <NuxtImg 
                        src="https://placehold.co/250x250"
                        class="rounded-xl"
                    />
                </div>
                <h3
                    class="mt-2"
                >
                    Pariser Toast
                </h3>
                <p
                    class="text-sm text-black/60 font-medium"
                >
                    best toast i byen
                </p>
            </div>
            <div>
                <div>
                    <NuxtImg 
                        src="https://placehold.co/250x250"
                        class="rounded-xl"
                    />
                </div>
                <h3
                    class="mt-2"
                >
                    Pariser Toast
                </h3>
                <p
                    class="text-sm text-black/60 font-medium"
                >
                    best toast i byen
                </p>
            </div>
            <div>
                <div>
                    <NuxtImg 
                        src="https://placehold.co/250x250"
                        class="rounded-xl"
                    />
                </div>
                <h3
                    class="mt-2"
                >
                    Pariser Toast
                </h3>
                <p
                    class="text-sm text-black/60 font-medium"
                >
                    best toast i byen
                </p>
            </div>
        </div>
    </section>
</template>
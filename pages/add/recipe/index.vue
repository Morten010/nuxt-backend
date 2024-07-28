<script setup lang="ts">
    import { reactive, ref } from "vue"
    import { toast } from "vue-sonner"
    import axios from "axios"

    
    const openCategory = ref(false)
    const categrorySearch = ref("")

    const recipe = reactive({
        name: "",
        description: "",
        category: null as null | {
            id: number;
            name: string;
        },
        ingredients: [] as {
            ingredient: null | {
                id: number;
                name: string;
            }
            type: null | {
                id: number;
                name: string;
            }
            amount: null | number,
        }[]
    })

    const handleSubmit = async (e: Event) => {
        e.preventDefault()

        if(!recipe.name) return toast.error("Opskrift mangler navn")
        if(!recipe.category) return toast.error("Opskrift mangler categori")
        if(!recipe.ingredients[0]) return toast.error("Opskrift mangler en ingrediens")


        console.log("added");
        console.log(recipe);
        try {
            const { data } = await axios.post('/api/recipe', recipe)
            console.log(data);
            toast.success('tilføjet')
            
        } catch (error) {
            toast.error('Noget gik galt')
            console.log(error);
            
        }
        
    }

    const { data, error, refresh } = await useFetch('/api/category')
    console.log(data.value);
    

</script>

<template>
    <h1
        class="text-4xl font-bold text-green-950 mb-2"
    >
        Tilføj opskrift
    </h1>

    <form
        class="flex flex-col gap-2"
        @submit="handleSubmit"
    >
        <label
            class="flex flex-col text-sm"
        >
            <span>
                Opskrift navn
            </span>
            <UiInput 
                placeholder="Pariser toast"
                v-model="recipe.name"
            />
        </label>
        <label
            class="flex flex-col text-sm"
        >
            <span>
                beskrivelse
            </span>
            <UiInput
                placeholder="Bedste pariser toast i byen"
                v-model="recipe.description"
            />
        </label>

        <UiAddIngredients 
            :recipe="recipe"
        />

        <!-- category -->
        <div 
          class="border rounded relative z-20"
        >
          <input 
            class="p-2 w-full"
            placeholder="Søg category"
            @focus="openCategory = true"
            v-model="categrorySearch"
          />
          <ul 
            class="flex flex-col max-h-[200px] overflow-auto absolute bg-white rounded w-full -bottom-2 translate-y-full border"
             v-if="openCategory"
          >
            <li
                v-for="cat in categrorySearch ? data?.filter(ing => ing.name.toLowerCase().includes(categrorySearch.toLowerCase())) : data"
                :key="cat.id"
                class="p-2 cursor-pointer hover:bg-gray-200 rounde"
                @click="() => {
                    recipe.category = cat
                    openCategory = false
                    categrorySearch = cat.name
                }">
                {{ cat.name }}
            </li>
          </ul>
        </div>
        <!-- category -->
    
        <UiPrimaryButton
            @click="handleSubmit"
        >
            Tilføj
        </UiPrimaryButton>
    </form>

</template>
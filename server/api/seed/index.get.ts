import { typeSeedValues, categorySeedValues, ingredientsSeedValues } from '~/constants/seed'

export default defineEventHandler(async (event) => {

    // seed ingredients
    await useDrizzle().insert(tables.ingredient).values(ingredientsSeedValues)

    // seed types
    await useDrizzle().insert(tables.type).values(typeSeedValues)
    // seed categories
    await useDrizzle().insert(tables.category).values(categorySeedValues)


    // seed recipes

    return 'database seeded'
})

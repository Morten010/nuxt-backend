export default defineEventHandler(async (event) => {

    // delete ingredients
    await useDrizzle().delete(tables.ingredient)

    // delete types
    await useDrizzle().delete(tables.type)
    // delete categories
    useDrizzle().delete(tables.category)

    // delete recipes
    await useDrizzle().delete(tables.recipe)

    // delete relations
    await useDrizzle().delete(tables.ingredientsRelation)
 

    return 'database deleteed'
})

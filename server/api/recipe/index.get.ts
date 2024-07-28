export default defineEventHandler((event) => {

    const ingridients = useDrizzle().query.recipe.findMany({
    })

    return ingridients
})

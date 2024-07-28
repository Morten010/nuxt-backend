export default defineEventHandler((event) => {

    const ingridients = useDrizzle().select().from(tables.ingredient)

    return ingridients
})

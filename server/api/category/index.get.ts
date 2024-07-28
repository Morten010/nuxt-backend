export default defineEventHandler((event) => {

    const categories = useDrizzle().select().from(tables.category)

    return categories
})

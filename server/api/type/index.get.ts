export default defineEventHandler((event) => {

    const type = useDrizzle().select().from(tables.type)

    return type
})

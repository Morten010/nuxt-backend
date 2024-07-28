export default defineEventHandler(async (event) => {
    const { name }: { name: string } = await readBody(event) 
    
    console.log(name);
    
    const insertedIngredient = await useDrizzle().insert(tables.ingredient).values({
        name,
    })

    console.log(insertedIngredient);
    

    return name
})
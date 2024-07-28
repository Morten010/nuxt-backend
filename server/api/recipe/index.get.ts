export default defineEventHandler((event) => {

    const recipes = useDrizzle().query.recipe.findMany({
        with: {
            ingredientsRelation: {
                columns: {
                    amount: true
                },
                with: {
                    ingredient: true,
                    type: true
                }
            }
        }
    })

    return recipes
})

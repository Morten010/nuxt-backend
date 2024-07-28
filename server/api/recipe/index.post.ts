import { InsertIngredientsRelation } from "../../database/schema"

export default defineEventHandler(async (event) => {
    const body: {
        name: string;
        description: string;
        category: {
            id: number;
            name: string;
        }
        ingredients: {
            ingredient: {
                id: number;
                name: string;
            } | null;
            type: {
                id: number;
                name: string;
            } | null;
            amount: null | number;
        }[];
    } = await readBody(event)

    const insertedRecipe = await useDrizzle().insert(tables.recipe).values({
        name: body.name,
        description: body.description,
        categoryId: body.category.id
    })

    const ingredientsValues = body.ingredients.map(ing => ({
        amount: ing.amount,
        ingredientId: ing.ingredient?.id,
        recipeId: insertedRecipe[0].insertId,
        typeId: ing.type?.id
    } as InsertIngredientsRelation))

    const insertedIngredientRelation = await useDrizzle().insert(tables.ingredientsRelation).values(ingredientsValues)


    console.log(insertedRecipe);
    console.log(insertedIngredientRelation);
    

    return "Done"
})

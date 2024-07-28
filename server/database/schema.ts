import { relations } from "drizzle-orm";
import {
	mysqlTable,
	serial,
	varchar,
	int,
} from "drizzle-orm/mysql-core"

export const ingredient = mysqlTable("ingredient", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255}).notNull(),
}); 

export const ingredientRelations = relations(ingredient, ({ one, many }) => ({
	ingredientsRelation: many(ingredientsRelation)
}));

export type SelectIngredient = typeof ingredient.$inferSelect;
export type InsertIngredient = typeof ingredient.$inferInsert;

export const recipe = mysqlTable("recipe", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255}).notNull(),
	description: varchar("description", { length: 255}),
	categoryId: int("categoryId").notNull(),
}); 

export const recipeRelations = relations(recipe, ({ one, many }) => ({
	ingredientsRelation: many(ingredientsRelation),
	category: many(category),
}));

export type SelectRecipe = typeof recipe.$inferSelect;
export type InsertRecipe = typeof recipe.$inferInsert;

export const ingredientsRelation = mysqlTable("ingredientsRelation", {
	id: serial("id").notNull(),
	ingredientId: int("ingredientId").notNull(),
	recipeId: int("recipeId").notNull(),
	amount: int("amount").notNull(),
	typeId: int("typeId").notNull(),
}); 

export const ingredientsRelationRelations = relations(ingredientsRelation, ({ one, many }) => ({
	ingredient: one(ingredient, {
		fields: [ingredientsRelation.ingredientId],
		references: [ingredient.id]
	}),
	recipe: one(recipe, {
		fields: [ingredientsRelation.recipeId],
		references: [recipe.id]
	}),
	type: one(type, {
		fields: [ingredientsRelation.recipeId],
		references: [type.id]
	})
}));

export type SelectIngredientsRelation = typeof ingredientsRelation.$inferSelect;
export type InsertIngredientsRelation = typeof ingredientsRelation.$inferInsert;

export const type = mysqlTable("type", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255}).notNull(),
}); 

export const typeRelations = relations(type, ({ one, many }) => ({
	ingredientsRelation: one(ingredientsRelation, {
		fields: [type.id],
		references: [ingredientsRelation.typeId],
	}),
}));

export type SelectType = typeof type.$inferSelect;
export type InsertType = typeof type.$inferInsert;

export const category = mysqlTable("category", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255}).notNull(),
}); 

export const categoryRelations = relations(category, ({ one, many }) => ({
	recipe: one(recipe, {
		fields: [category.id],
		references: [recipe.categoryId],
	}),
}));

export type SelectCategory = typeof category.$inferSelect;
export type InsertCategory = typeof category.$inferInsert;
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
	ingredientsRelation: one(ingredientsRelation, {
		fields: [ingredient.id],
		references: [ingredientsRelation.ingredientId],
	}),
}));

export type SelectIngredient = typeof ingredient.$inferSelect;
export type InsertIngredient = typeof ingredient.$inferInsert;

export const recipe = mysqlTable("recipe", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255}).notNull(),
	description: varchar("description", { length: 255}),
}); 

export const recipeRelations = relations(recipe, ({ one, many }) => ({
	recipes: many(recipe),
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
	ingredientsRelations: many(ingredientsRelation),
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


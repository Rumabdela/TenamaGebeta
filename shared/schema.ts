import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const recipes = pgTable("recipes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  prepTime: text("prep_time").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array().notNull().default([]),
  nutritionalBenefits: text("nutritional_benefits").notNull(),
  ingredients: jsonb("ingredients").notNull(),
  instructions: jsonb("instructions").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const experts = pgTable("experts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  specialties: text("specialties").array().notNull().default([]),
  yearsExperience: integer("years_experience").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  healthGoals: text("health_goals").notNull(),
  preferredTime: text("preferred_time").notNull(),
  additionalInfo: text("additional_info"),
  status: text("status").notNull().default('pending'),
  createdAt: timestamp("created_at").defaultNow()
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default('unread'),
  createdAt: timestamp("created_at").defaultNow()
});

export const newsletters = pgTable("newsletters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  isActive: text("is_active").notNull().default('true'),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertRecipeSchema = createInsertSchema(recipes).pick({
  name: true,
  description: true,
  imageUrl: true,
  prepTime: true,
  category: true,
  tags: true,
  nutritionalBenefits: true,
  ingredients: true,
  instructions: true
});

export const insertExpertSchema = createInsertSchema(experts).pick({
  name: true,
  title: true,
  bio: true,
  imageUrl: true,
  specialties: true,
  yearsExperience: true
});

export const insertConsultationSchema = createInsertSchema(consultations).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  healthGoals: true,
  preferredTime: true,
  additionalInfo: true
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  firstName: true,
  lastName: true,
  email: true,
  subject: true,
  message: true
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  email: true
});

export type InsertRecipe = z.infer<typeof insertRecipeSchema>;
export type Recipe = typeof recipes.$inferSelect;

export type InsertExpert = z.infer<typeof insertExpertSchema>;
export type Expert = typeof experts.$inferSelect;

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

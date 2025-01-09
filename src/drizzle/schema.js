import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
  id: uuid('id').defaultRandom().notNull().primaryKey(),
  email: text('email').notNull(),
  role: text('role').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').notNull(),
  contentUrl: text('content_url').notNull(),
  caption: text('caption'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const campaigns = pgTable('campaigns', {
  id: serial('id').primaryKey(),
  brandId: uuid('brand_id').notNull(),
  title: text('title').notNull(),
  description: text('description'),
  budget: text('budget').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
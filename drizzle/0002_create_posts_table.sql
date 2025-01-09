CREATE TABLE "posts" (
  "id" SERIAL PRIMARY KEY,
  "user_id" UUID NOT NULL REFERENCES "profiles"("id"),
  "content_url" TEXT NOT NULL,
  "caption" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW()
);
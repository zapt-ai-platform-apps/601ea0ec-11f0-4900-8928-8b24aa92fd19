CREATE TABLE "campaigns" (
  "id" SERIAL PRIMARY KEY,
  "brand_id" UUID NOT NULL REFERENCES "profiles"("id"),
  "title" TEXT NOT NULL,
  "description" TEXT,
  "budget" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);
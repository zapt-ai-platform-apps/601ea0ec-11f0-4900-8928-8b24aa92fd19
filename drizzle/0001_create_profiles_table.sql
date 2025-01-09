CREATE TABLE "profiles" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);
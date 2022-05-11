-- CreateTable
CREATE TABLE "ticket" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "techStack" TEXT[],
    "problemStatement" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "landingPageImage" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "liveLink" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "userId" SERIAL NOT NULL,
    "conginitoID" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "profilePictureUrl" TEXT,
    "teamId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "public"."Team" (
    "id" SERIAL NOT NULL,
    "teamName" TEXT NOT NULL,
    "productOwnerUserID" INTEGER,
    "projectManagerUserId" INTEGER,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProjectTeam" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "ProjectTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT,
    "priority" TEXT,
    "tags" TEXT,
    "startDate" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3),
    "points" INTEGER,
    "projectId" INTEGER NOT NULL,
    "authorUserId" INTEGER NOT NULL,
    "assignedUserId" INTEGER,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TaskAssignment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "TaskAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Attachment" (
    "id" SERIAL NOT NULL,
    "fileURL" TEXT NOT NULL,
    "fileName" TEXT,
    "taskId" INTEGER NOT NULL,
    "uploadedbyId" INTEGER NOT NULL,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "taskId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_conginitoID_key" ON "public"."User"("conginitoID");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProjectTeam" ADD CONSTRAINT "ProjectTeam_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProjectTeam" ADD CONSTRAINT "ProjectTeam_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Task" ADD CONSTRAINT "Task_authorUserId_fkey" FOREIGN KEY ("authorUserId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Task" ADD CONSTRAINT "Task_assignedUserId_fkey" FOREIGN KEY ("assignedUserId") REFERENCES "public"."User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TaskAssignment" ADD CONSTRAINT "TaskAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TaskAssignment" ADD CONSTRAINT "TaskAssignment_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Attachment" ADD CONSTRAINT "Attachment_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Attachment" ADD CONSTRAINT "Attachment_uploadedbyId_fkey" FOREIGN KEY ("uploadedbyId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

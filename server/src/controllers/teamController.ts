import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
    try {
        const teams = await prisma.team.findMany();

        const teamswithUsernames = await Promise.all(
            teams.map(async(team:any) => {
                const ProductOwner  = await prisma.user.findUnique({
                    where: {userId: team.ProductOwnerUserId! },
                    select: {username: true},
                });

                const ProjectManager =  await prisma.user.findUnique({
                    where: {userId: team.ProjectManagerUserId! },
                    select: {username: true},
            });

            return {
                ...team,
                productOwnerUsername: ProductOwner?.username,
                projectManagerUsername: ProjectManager?.username

            }
        })
        );
        res.json(teamswithUsernames);
    } catch (error:any) {
        res
            .status(500)
            .json({message: `Error retrieving teams: ${error.message}`});
    }
};
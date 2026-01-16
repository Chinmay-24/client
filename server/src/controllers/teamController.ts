import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
    try {
        const teams = await prisma.team.findMany();

        const teamswithUsername = await Promise.all(
            teams.map(async(team:any) => {
                const ProductOwner = a const user = await prisma.user.findUnique({
                    where: {userId: team.ProductOwnerUserId! },
                    select: {username: true},
                })
            })
        )
        res.json(users);
    } catch (error:any) {
        res
            .status(500)
            .json({message: `Error retrieving users: ${error.message}`});
    }
};
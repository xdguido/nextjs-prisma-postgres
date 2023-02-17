import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}

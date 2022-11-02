import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const rs = await prisma.tenant.findMany({
    include: {
      users: true,
      clients: true,
      projects: true,
    }
  })
  return res.json(rs)
}

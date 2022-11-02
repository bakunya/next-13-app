import { NextApiRequest, NextApiResponse } from "next/types";
import prisma from "@lib/prisma";

export async function getClients(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tenantId = req.session.user.tenantId
    const rs = await prisma.client.findMany({
      where: { tenantId: tenantId}
    })

    // if (!rs) return res.status(401).json({})
    return res.json(rs)
  } catch (error) {
    return res.status(500).json({})
  }
}

export async function getClient(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filter = req.query.filter as string
    const rs = await prisma.client.findFirst({
      where: { id: filter }
    })

    // if (!rs) return res.status(401).json({})
    return res.json(rs)
  } catch (error) {
    return res.status(500).json({})
  }
}
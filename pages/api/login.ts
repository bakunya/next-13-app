import { sessionOptions } from "@lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { SessionUser } from "./user";
import prisma from "@lib/prisma";

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body

  try {
    const rs = await prisma.usersOnTenants.findMany({
      where: {
        status: "active",
        user: { username: username }
      },
      select: {
        userId: true,
        tenantId: true,
        isAdmin: true,
        user: { select: { fullname:true, username:true, hash:true }},
        tenant: { select:{ name:true, type:true, expiryDate: true }},
      }
    })

    if (rs.length === 0) res.status(404).json({ message: "Username Not Found" });

    // For now, select first
    const found = rs[0]
    const user: SessionUser = {
      userId: found.userId,
      username: found.user.username,
      fullname: found.user.fullname,
      multi: rs.length > 1,
      tenantId: found.tenantId,
      tenantType: found.tenant.type,
      tenantName: found.tenant.name,
      tenantExpiry: found.tenant.expiryDate.toISOString()
    }
    req.session.user = user;
    await req.session.save();
    res.json(user);

  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
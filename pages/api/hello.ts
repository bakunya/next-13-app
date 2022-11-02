import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const rs = await prisma.usersOnTenants.findMany({
    select: {
      status: true,
      isAdmin: true,
      tenant: { select: {id: true, name:true, expiryDate: true, type: true}},
      user: { select: {id:true, fullname:true, username:true,hash:true}},
    },
    where: {userId: "635d56d490b0616df9617782", status:"active"}
  })

  // console.log(rs[0]);
  const rs2 = await prisma.user.findFirst({
    select: {fullname:true,username:true, tenants: {select: { status:true, tenant:true}}}
  })

  const rs3 = await prisma.usersOnTenants.findMany({
    // include: {
    //   user: {select: {fullname:true,username:true,hash:true}},
    //   tenant: {select:{name:true,type:true},
    // }},
    where: {
      status: "active",
      user: {username: "muslax"}
    },
    include: {
      user: {select: {fullname:true,username:true,hash:true}},
      tenant: {select:{name:true,type:true},
    }},
  })

  // For login, only select {status: "active"}
  const rs4 = await prisma.usersOnTenants.findMany({
    where: {
      status: "active",
      user: {username: "muslax"}
    },
    select: {
      userId: true,
      tenantId: true,
      isAdmin: true,
      user: { select: { fullname:true, username:true, hash:true }},
      tenant: { select:{ name:true, type:true, expiryDate: true }},
    }
  })

  return res.json(rs4)
}

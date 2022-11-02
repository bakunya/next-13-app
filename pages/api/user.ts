import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";

export type SessionUser = {
  userId: string;
  username: string;
  fullname: string;
  multi: boolean; // belongs to multi-tenants
  tenantId: string;
  tenantType: string;
  tenantName: string;
  tenantExpiry: string;
};

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse<SessionUser>) {
  if (req.session.user) {
    res.json({
      ...req.session.user,
    });
  } else {
    res.status(404).json({
      userId:'',
      username:'',
      fullname:'',
      multi: false,
      tenantId: '',
      tenantType: '',
      tenantName: '',
      tenantExpiry: '',
    });
  }
}

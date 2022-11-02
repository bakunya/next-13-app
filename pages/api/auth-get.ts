import { NextApiRequest, NextApiResponse } from "next/types";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@lib/session";
import { AUTH_QUERIES } from "@lib/queries";

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user

  // Auth only
  if (!user) return res.status(401).json({ message: 'Forbidden' });

  // GET only
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  let subject = req.query.subject;
  if (subject === undefined) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  if (Array.isArray(subject)) subject = subject[0] as string;

  // @ts-ignore
  if (AUTH_QUERIES[subject] === undefined) {
    return res.status(500).json({ message: 'Sorry, this error comes from us.' });
  }
  console.log('subject', subject);

  // @ts-ignore
  const handler = AUTH_QUERIES[subject];
  return handler(req, res);
}
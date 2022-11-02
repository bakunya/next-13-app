import Link from "next/link";
import prisma from "@lib/prisma";
import Head from "next/head";
// import styles from "./page.module.css";

async function getData() {
  const data = await prisma.tenant.findMany({
    include: { users: true, clients: true },
  });

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <main className="">
        <h3 className="">Next.js 13 / Prisma / MongoDB</h3>
        <p>
          <Link href="/dashboard" style={{ color: "blue" }}>
            Dashboard
          </Link>
        </p>
        <pre>Server-side data {JSON.stringify(data, null, 2)}</pre>
      </main>
    </>
  );
}

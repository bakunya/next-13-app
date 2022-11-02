import Image from "next/image";
import prisma from "../lib/prisma";
import styles from "./page.module.css";

async function getData() {
  const data = await prisma.tenant.findMany({
    include: { users: true, clients: true },
  });

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Next.js 13 with Prisma</h1>
        <pre>Server-side data {JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}

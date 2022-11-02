import prisma from "@lib/prisma";

async function getData() {
  const data = await prisma.user.findMany({
    include: { tenants: true },
  });

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <main className="">
        <h3 className="">Next.js 13 / Prisma / MongoDB</h3>
        <pre>Server-side data {JSON.stringify(data, null, 2)}</pre>
      </main>
    </>
  );
}

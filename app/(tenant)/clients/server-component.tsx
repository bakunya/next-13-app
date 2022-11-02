import prisma from "@lib/prisma";

async function getData() {
  const data = await prisma.client.findMany({
    include: { tenant: true },
  });

  return data;
}
export default async function ServerComponent() {
  const data = await getData();

  return (
    <>
      <p>Data (clients) fetched by server component:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

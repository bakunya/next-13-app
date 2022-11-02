"use client";

import useSWR from "swr";

export default function ClientComponent() {
  const { data } = useSWR("/api/auth-get?subject=get-clients");

  return (
    <>
      <p>
        Fetched client-side using <b>useSWR()</b>
      </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

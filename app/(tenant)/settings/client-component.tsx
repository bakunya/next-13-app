"use client";

import fetchJson from "@lib/fetchJson";
import { cache, use } from "react";
import useSWR from "swr";

// FAILED TO BUILD
const withFetch = cache(async () => {
  console.log("withFetch");
  const data = await fetch("/api/auth-get?subject=get-clients");
  return data.json();
});

// FAILED TO BUILD
const withFetchJson = cache(async () => {
  console.log("withFetchJson");
  const data = await fetchJson("/api/auth-get?subject=get-clients");
  return data;
});

export default function ClientComponent() {
  // const data = use(withFetchJson());
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

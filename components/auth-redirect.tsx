"use client";

import useUser from "@lib/useUser";

export default function AuthRedirect() {
  const { user } = useUser({ redirectTo: "/login" });
  return <></>;
}

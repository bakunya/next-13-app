"use client";

import { useContext, useEffect } from "react";
import SessionContext from "./SessionProvider";
import useUser from "@lib/useUser";
import fetchJson from "@lib/fetchJson";
import Link from "next/link";

export default function UserContext() {
  const { user, isValidating } = useUser();
  const { sessionUser, setSessionUser } = useContext(SessionContext);
  useEffect(() => {
    if (user) setSessionUser(user);
  }, [user]);

  if (sessionUser)
    return (
      <div>
        {sessionUser.fullname} - {sessionUser.tenantName} (
        {sessionUser.tenantType}){` `}
        <a
          href="/logout"
          className="logout"
          onClick={async (e) => {
            e.preventDefault();
            await fetchJson("/api/logout", { method: "POST" });
            // client refresh
            window.location.href = "/";
          }}>
          Logout
        </a>
      </div>
    );

  if (isValidating) return <div>Checking user...</div>;

  return (
    <div>
      Guest <Link href="/login">Login</Link>
    </div>
  );
}

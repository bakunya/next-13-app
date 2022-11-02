"use client";

import Link from "next/link";
import LoginForm from "./form";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import SessionContext from "components/SessionProvider";

export default function LoginPage() {
  const router = useRouter();
  const { sessionUser } = useContext(SessionContext);
  useEffect(() => {
    if (sessionUser) {
      router.push("/dashboard");
    }
  }, [sessionUser]);

  if (sessionUser) return <></>;

  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
}

"use client";

import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import fetchJson, { FetchError } from "lib/fetchJson";
import SessionContext from "app/(home)/SessionProvider";
import { SessionUser } from "@api/user";

export default function LoginForm() {
  const router = useRouter();
  const { setSessionUser } = useContext(SessionContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const body = {
      username: event.currentTarget.username.value,
    };

    try {
      const user = await fetchJson("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setSessionUser(user as SessionUser);
      router.push("/dashboard");
    } catch (error) {
      setSubmitting(false);
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  return (
    <form className="mx-auto my-6 max-w-sm" onSubmit={submitHandler}>
      <div className="grid grid-cols-1 gap-3">
        <label>
          <span>Type muslax atau lusi</span>
          <br />
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            name="username"
            autoComplete="off"
            defaultValue="muslax"
            disabled={submitting}
            required
          />
        </label>

        <button
          disabled={submitting}
          className="w-full rounded bg-blue-500 py-2 text-white"
          type="submit">
          Login
        </button>

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      </div>
    </form>
  );
}

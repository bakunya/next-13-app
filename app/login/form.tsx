"use client";

import { FormEvent, useState } from "react";
import fetchJson, { FetchError } from "lib/fetchJson";

export default function LoginForm() {
  const [errorMsg, setErrorMsg] = useState("");

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      username: event.currentTarget.username.value,
    };

    try {
      await fetchJson("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 100);
    } catch (error) {
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
            required
          />
        </label>

        <button
          className="w-full rounded bg-blue-500 py-2 text-white"
          type="submit">
          Login
        </button>

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      </div>
    </form>
  );
}

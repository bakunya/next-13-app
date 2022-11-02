import useSWR from "swr";
import { SessionUser } from "@api/user";
import fetchJson from "./fetchJson";

export default function useUser() {
  const { data: user, mutate: mutateUser, isValidating, error } = useSWR<SessionUser>("/api/user", fetchJson);
  return { user, mutateUser, isValidating };
}

"use client";

import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { SessionUser } from "@api/user";

interface SessionContextProps {
  sessionUser: SessionUser | undefined;
  setSessionUser: Dispatch<SessionUser>;
}

const SessionContext = createContext<SessionContextProps>({
  sessionUser: undefined,
  setSessionUser: () => undefined,
});

export function SessionProvider({ children }: { children: ReactNode }) {
  const [sessionUser, setSessionUser] = useState<SessionUser | undefined>(
    undefined
  );

  useEffect(() => {
    if (sessionUser) setSessionUser(sessionUser);
    return () => {};
  }, [sessionUser]);

  return (
    <SessionContext.Provider value={{ sessionUser, setSessionUser }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;

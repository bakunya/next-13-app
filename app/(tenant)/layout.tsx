"use client";

import SessionContext from "app/(home)/SessionProvider";
import MetaLayout from "components/meta-layout";
import { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarNoAuth from "../(home)/Navbar";
import { useRouter } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { sessionUser } = useContext(SessionContext);
  useEffect(() => {
    if (!sessionUser) {
      router.push("/login");
    }
  }, [sessionUser]);

  if (!sessionUser)
    return (
      <MetaLayout leftContent={<NavbarNoAuth />}>
        <></>
      </MetaLayout>
    );

  return (
    <>
      {/* <AuthRedirect /> */}
      <MetaLayout leftContent={<Navbar />}>{children}</MetaLayout>
    </>
  );
}

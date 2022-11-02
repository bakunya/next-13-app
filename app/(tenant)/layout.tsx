import AuthRedirect from "components/auth-redirect";
import MetaLayout from "components/meta-layout";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AuthRedirect />
      <MetaLayout leftContent={<Navbar />}>{children}</MetaLayout>
    </>
  );
}

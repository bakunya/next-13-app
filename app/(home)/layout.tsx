import MetaLayout from "components/meta-layout";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <MetaLayout leftContent={<Navbar />}>{children}</MetaLayout>;
}

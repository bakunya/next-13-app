"use client";

import Link from "next/link";
import { useContext } from "react";
import SessionContext from "../../components/SessionProvider";
// import styles from "./navbar.module.css";
import "./navbar.css";

const links = [
  { auth: false, text: "Home", href: "/" },
  { auth: true, text: "Dashboard", href: "/dashboard" },
  { auth: true, text: "Clients", href: "/clients" },
  { auth: true, text: "Settings", href: "/settings" },
  { auth: true, text: "Billing", href: "/billing" },
];

export default function Navbar() {
  const { sessionUser } = useContext(SessionContext);

  return (
    <>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <Link
              href={link.href}
              className={!sessionUser && link.auth ? "auth" : ""}>
              {link.text}
            </Link>
          </li>
        ))}
        <li>
          <hr />
        </li>
        <li>
          <Link href="/login" className="login">
            Login
          </Link>
        </li>
      </ul>
      {/* Style below is not applicable */}
      <style jsx>{`
        ul {
          margin: 0;
          padding: 0.5rem 0 0;
          list-style: none;
        }
        li {
          margin-bottom: 0.75rem;
        }
        a {
          color: blue;
        }
        a.auth {
          color: magenta;
        }
        a.login {
          color: orange;
        }
      `}</style>
    </>
  );
}

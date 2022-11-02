import Link from "next/link";

const links = [
  { text: "Home", href: "/" },
  { text: "Dashboard", href: "/dashboard" },
  { text: "Clients", href: "/clients" },
  { text: "Settings", href: "/settings" },
  { text: "Billing", href: "/billing" },
];

export default function Navbar() {
  return (
    <>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href}>{link.text}</Link>
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
        a.login {
          color: orange;
        }
      `}</style>
    </>
  );
}

import Link from "next/link";
import LoginForm from "./form";

export default function LoginPage() {
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

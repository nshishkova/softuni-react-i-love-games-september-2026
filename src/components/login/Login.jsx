import { useAuth } from "../../hooks/useAuth.js";
import {toast} from "react-toastify";

export default function Login() {
  const { login } = useAuth();

  const submitAction = (formData) => {
    const { email, password } = Object.fromEntries(formData);

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    login({ email, password });
  };

  return (
    // <!-- Login Page ( Only for Guest users ) -->
    <section id="login-page">
      <form id="login" action={submitAction}>
        <div className="container">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          <label htmlFor="login-pass">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder="Password"
          />
          <input type="submit" className="btn submit" value="Login" />
        </div>
      </form>
    </section>
  );
}

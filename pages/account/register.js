import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import styles from "@/styles/AuthForm.module.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Password do not match!");
      return;
    }

    register({ username, email, password, passwordConfirm });
  };

  return (
    <Layout title="User Registration">
      <div className={styles.authWrapper}>
        <div className={styles.auth}>
          <h1>
            <FaUser /> Register
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm">Password Confirm</label>
              <input
                type="password"
                id="passwordConfirm"
                value={passwordConfirm}
                autoComplete="new-password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Register"
              className="btn btn-secondary"
            />
          </form>

          <p>
            Already have an account? <Link href="/account/login">Login</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

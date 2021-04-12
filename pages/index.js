import Head from "next/head";
import styles from "../styles/Home.module.css";

import FormLogin from "components/FormLogin";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormLogin />
      <footer className={styles.footer}>
        <a
          href="https://github.com/sherlock28"
          target="_blank"
          rel="noopener noreferrer"
        >
          rododev{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

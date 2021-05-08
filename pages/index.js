import { useEffect } from "react";
import Head from "next/head";
import styles from "styles/Index.module.css";
import FormLogin from "components/FormLogin";
import Spinner from "components/Spinner";
import { useRouter } from "next/router";
import { useUser } from "hooks";

export default function LoginPage() {
  const { isLogged } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      router.push("/home");
    }
  }, [isLogged]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLogged ? (
        <div className="container d-flex justify-content-center align-items-center">
          <Spinner height={"50px"} width={"50px"} />
        </div>
      ) : (
        <>
          <FormLogin />{" "}
          <footer className={styles.footer}>
            <a
              href="https://github.com/sherlock28"
              target="_blank"
              rel="noopener noreferrer"
            >
              rododev{" "}
              <img
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.logo}
              />
            </a>
          </footer>
        </>
      )}
    </div>
  );
}

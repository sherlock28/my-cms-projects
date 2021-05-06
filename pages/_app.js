import Head from "next/head";
import "../styles/globals.css";
import "bootswatch/dist/materia/bootstrap.min.css";
import "animate.css/animate.min.css";
import { UserContextProvider, ProjectContextProvider } from "context";
import HeadContent from "components/HeadContent";
import Scripts from "components/Scripts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <HeadContent />
      </Head>

      <UserContextProvider>
        <ProjectContextProvider>
          <Component {...pageProps} />
        </ProjectContextProvider>
      </UserContextProvider>

      <Scripts />
    </>
  );
}

export default MyApp;

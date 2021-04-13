import "../styles/globals.css";
import "bootswatch/dist/materia/bootstrap.min.css";
import "animate.css/animate.min.css";
import { UserContextProvider } from "context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;

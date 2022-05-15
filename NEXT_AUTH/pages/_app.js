import { Provider } from "next-auth/client";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

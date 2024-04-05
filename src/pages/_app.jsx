import "@/styles/globals.css";
import Layout from "@/components/Layout";
import useLocalStorage from "use-local-storage";

export default function App({ Component, pageProps }) {
  
  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultLight ? "light" : "dark"
  );

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

import { useEffect } from "react";
import { SWRConfig } from "swr";
import "styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/a11y-dark.css";
import "nprogress/nprogress.css";
import { ThemeProvider } from "context/theme-context";
import { useRouter } from "next/router";
import NProgress from "nprogress";

// Router.onRouteChangeStart =

// Router.onRouteChangeCompleted = (url) => {
//   console.log(url + "userlee");
//   NProgress.done();
// };
// Router.onRouteChangeError = (url) => {
//   console.log(url + "userlee aldaa");
//   NProgress.done();
// };
const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <SWRConfig
      value={{
        refreshInterval: 60000,
        fetcher,
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            // We can send the error to Sentry,
            // or show a notification UI.
            // alert("aldaa", error);
          }
        },
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;

import "./styles.css";
// import Router from "next/router";

// Router.events.on("routeChangeComplete", () => {
//   if (process.env.NODE_ENV !== "production") {
//     const els = document.querySelectorAll(
//       'link[href*="/_next/static/css/styles.chunk.css"]'
//     );
//     const timestamp = new Date().valueOf();
//     els[0].href = "/_next/static/css/styles.chunk.css?v=" + timestamp;
//   }
// });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

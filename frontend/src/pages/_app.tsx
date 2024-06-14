// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }











import "@/styles/globals.css";


import type { AppProps } from "next/app";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@/layout";
import { getAboutUsPageData, getAllLocationPageData, getFooterData, getHeaderData, getHomePageData } from "../../lib/strapiQuery";

export default function App({ Component, pageProps, headerData, footerData } : AppProps & {headerData:any,footerData:any} ) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.min.js') : null
}, [])





  return<>
 <Layout headerData={headerData}  footerData={footerData} >   

  <Component {...pageProps} />;
  </Layout>
  </>
}

App.getInitialProps = async () => {
  const headerData = await getHeaderData()
  const footerData = await getFooterData()

  
  return { headerData,footerData };
};

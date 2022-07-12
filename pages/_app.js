import '../styles/globals.css'
import Layout from "../components/Layout";
import About from "../components/About";
import NewSection from "../components/NewSection";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <div className="container">
            <Component {...pageProps} />
          </div>
      </Layout>
  )
}

export default MyApp

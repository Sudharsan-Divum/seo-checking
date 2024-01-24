import { Helmet } from "react-helmet";
import "./App.css";
import { Routing } from "./routes";

export default function App() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore a website created for comprehensive SEO testing and optimization analysis purposes."
        />
        <link
          rel="canonical"
          href="https://prismatic-narwhal-ee86e9.netlify.app"
        />
        <meta name="og: title" content="Hostifier" />
        <meta
          name="og: description"
          content="Explore a website created for comprehensive SEO testing and optimization analysis purposes, named Hostifier"
        />
        <meta
          name="keywords"
          content="poc, POC, this, that, entry, nav, inin,rro,sseeoo"
        />
      </Helmet>
      <Routing />
    </>
  );
}

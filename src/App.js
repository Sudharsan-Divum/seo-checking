import { Helmet } from "react-helmet";
import "./App.css";
import { Routing } from "./routes";

export default function App() {
  return (
    <>
      <Helmet>
        <Routing />
      </Helmet>
    </>
  );
}

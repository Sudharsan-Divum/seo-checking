import { Link } from "react-router-dom";
import "./navBar.css";

export default function Navbar() {
  return (
    <div>
      <div className="nav-bar">
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none", fontSize: "24px" }}
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          to="/next"
          style={{ color: "#fff", textDecoration: "none", fontSize: "24px" }}
        >
          {" "}
          Details{" "}
        </Link>
        <Link
          to="/contact"
          style={{ color: "#fff", textDecoration: "none", fontSize: "24px" }}
        >
          {" "}
          Contact{" "}
        </Link>
      </div>
    </div>
  );
}

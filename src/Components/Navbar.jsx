import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <button>
          <Link to="/auth/signup">Sign Up</Link>
        </button>
        <button>
          <Link to="/auth/login">Login</Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

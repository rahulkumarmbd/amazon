import "./ProductsNav.css";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
export const ProductsNav = () => {
  const { Auth } = useSelector((store) => store);
  const navigate = useNavigate();
  console.log("user", Auth.user);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <div>
      <div className="ProductsNav">
        <div>Products</div>
        <div style={{transform:"translateX(56px)"}}>{Auth.user.fullName}</div>
        <div>
          <button>
            <Link to="/cart">Go To Cart</Link>
          </button>
          <button onClick={handleLogOut}>LogOut</button>
        </div>
      </div>
    </div>
  );
};

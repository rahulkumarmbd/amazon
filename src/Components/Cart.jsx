import "./ProductsNav.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Button, Heading } from "@chakra-ui/react";
import { Remove_From_Cart } from "../Redux/Products/Actions";

export const Cart = () => {
  const { Auth, Main } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <div>
      <div>
        <div className="ProductsNav">
          <div>Products</div>
          <div style={{transform:"translateX(106px)"}}>{Auth.user.fullName}</div>
          <div>
            <button>
              <Link to="/products">Products</Link>
            </button>
            <button>
              <Link to="/checkout">CheckOut</Link>
            </button>
            <button onClick={handleLogOut}>LogOut</button>
          </div>
        </div>
      </div>
      <Heading style={{ textAlign: "center", margin: "30px" }}>
        Products
      </Heading>
      <div className="Products">
        {Main?.cartProducts?.map((item, index) => {
          return (
            <div className="Product" key={index}>
              <div className="img-box">
                <img src={item.image} alt="" />
              </div>
              <div>
                <Heading style={{ textAlign: "center", margin: "24px" }}>
                  {item.title}
                </Heading>
              </div>
              <div>{item.description}</div>
              <div>
                <h3>Rs. {item.price}</h3>
              </div>
              <div>
                <h4>Rating : {item.rating.rate}</h4>
              </div>
              <Button
                onClick={() => {
                  dispatch(Remove_From_Cart(item.id));
                }}
                colorScheme="blue"
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

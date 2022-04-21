import "./ProductsNav.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Button, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Checkout = () => {
  const [totalAmount, setTotalAmount] = useState();
  const { Auth, Main } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  useEffect(() => {
      let sum = 0;
      for(let i=0; i<Main.cartProducts.length; i++){
          sum += Main.cartProducts[i].price;
      }
      setTotalAmount(sum);
  }, []);

  return (
    <div>
      <div>
        <div className="ProductsNav">
          <div>Checkout</div>
          <div style={{ transform: "translateX(106px)" }}>
            {Auth.user.fullName}
          </div>
          <div>
            <button>
              <Link to="/products">Products</Link>
            </button>
            <button>
              <Link to="/cart">Cart</Link>
            </button>
            <button onClick={handleLogOut}>LogOut</button>
          </div>
        </div>
      </div>
      <Heading style={{ textAlign: "center", margin: "30px" }}>
        Total Amount : {totalAmount}
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
              <div>
                <h3>Rs. {item.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

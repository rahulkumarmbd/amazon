import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Fetch_Products,
  Add_To_Cart,
  Sort_By_Value,
} from "../Redux/Products/Actions";
import { ProductsNav } from "./ProductsNav";
import "./Products.css";
import { Button, Heading, Select, Checkbox } from "@chakra-ui/react";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { allProducts } = useSelector((store) => store.Main);
  const dispatch = useDispatch();

  const handleSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setProducts(allProducts);
      return;
    }
    setProducts((items) => {
      return [
        ...allProducts.filter((a) => {
          return a.Location === e.target.value;
        }),
      ];
    });
  };

  const sort_by_Radius = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setProducts(allProducts);
      return;
    }
    setProducts((items) => {
      return [
        ...allProducts.filter((a) => {
          return a.Radius <= e.target.value;
        }),
      ];
    });
  };

  const sort_by_Payment_method = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setProducts(allProducts);
      return;
    }
    setProducts((items) => {
      return [
        ...allProducts.filter((a) => {
          return a.payment === e.target.value;
        }),
      ];
    });
  };

  const sort_by_rating = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setProducts(allProducts);
      return;
    }

    if (e.target.value === "low") {
      setProducts((items) => {
        return [
          ...items.sort((a, b) => {
            if (a.rating.rate > b.rating.rate) {
              return 1;
            } else if (a.rating.rate < b.rating.rate) {
              return -1;
            }
            return 0;
          }),
        ];
      });
    } else {
      setProducts((items) => {
        return [
          ...items.sort((a, b) => {
            if (a.rating.rate > b.rating.rate) {
              return -1;
            } else if (a.rating.rate < b.rating.rate) {
              return 1;
            }
            return 0;
          }),
        ];
      });
    }
  };

  const sort_by_discount = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === false) {
      setProducts(allProducts);
      return;
    }
    setProducts((items) => {
      return [
        ...allProducts.filter((a) => {
          return a.discount === "Available";
        }),
      ];
    });
  };

  useEffect(() => {
    dispatch(Fetch_Products());
    setProducts(allProducts);
  }, []);

  return (
    <div>
      <ProductsNav />
      <Heading style={{ textAlign: "center", margin: "30px" }}>
        Products
      </Heading>
      <div className="sort">
        <div>
          <span>
            <Select placeholder="Select Geolocation" onChange={handleSort}>
              <option value="India">India</option>
              <option value="Russia">Russia</option>
              <option value="USA">USA</option>
            </Select>
          </span>
        </div>
        <div>
          <span>
            <Select placeholder="Select Radius" onChange={sort_by_Radius}>
              <option value="10">10Km</option>
              <option value="20">20Km</option>
              <option value="30">30Km</option>
              <option value="40">40Km</option>
              <option value="50">50Km</option>
              <option value="100">100Km</option>
            </Select>
          </span>
        </div>
        <div>
          <span>
            <Select
              placeholder="Select Payment Method"
              onChange={sort_by_Payment_method}
            >
              <option value="GooglePay">Google Pay</option>
              <option value="paytm">Paytm</option>
              <option value="BharatPay">BharatPay</option>
            </Select>
          </span>
        </div>
        <div>
          <span>
            <Select placeholder="Sort by Rating" onChange={sort_by_rating}>
              <option value="high">High To Low</option>
              <option value="low">Low To High</option>
            </Select>
          </span>
        </div>
        <div>
          <Checkbox onChange={sort_by_discount}>Discount</Checkbox>
        </div>
      </div>
      <div className="Products">
        {products?.map((item, index) => {
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
                  dispatch(Add_To_Cart(item));
                  alert("Your Product is add Successfully into your cart");
                }}
                colorScheme="blue"
              >
                Add to Cart
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

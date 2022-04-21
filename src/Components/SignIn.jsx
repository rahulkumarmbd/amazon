import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  RadioGroup,
  Radio,
  Stack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { User } from "../Redux/Auth/Actions";
import { useNavigate } from "react-router-dom";
const initState = {
  email: "",
  password: "",
  userType: "",
};

export const SignIn = () => {
  const [show, setShow] = React.useState(false);
  const [userType, setUserType] = React.useState("buyer");
  const [user, setUser] = React.useState(initState);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => {
      return { ...prev, userType: userType, [name]: value };
    });
  };

  const handleLogin = () => {
    if (user.password === "" || user.email === "") {
      alert("Please Enter rquired fields");
      return;
    }

    axios
      .get(`http://localhost:3001/users`)
      .then(({ data }) => {
        for (let i = 0; i < data.length; i++) {
          if (
            user.password === data[i].password &&
            user.email === data[i].email
          ) {
            dispatch(User(data[i]));
            navigate("/products");
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Heading style={{ textAlign: "center", margin: "30px" }}>
        Welcome to Amazon
      </Heading>
      <div className="signInDiv">
        <Input
          placeholder="Enter your Email"
          style={{ border: "1px solid #E2E8F0" }}
          name="email"
          onChange={handleChange}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <RadioGroup
          onChange={(e) => {
            setUserType(e);
            handleChange({ target: { name: "userType", value: e } });
          }}
          value={userType}
        >
          <Stack direction="row">
            <Radio value="buyer">Buyer</Radio>
            <Radio value="seller">Seller</Radio>
          </Stack>
        </RadioGroup>
        <Button onClick={handleLogin} colorScheme="blue">
          Sign In
        </Button>
      </div>
    </div>
  );
};

import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  RadioGroup,
  Radio,
  Stack,
  Heading,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

const initState = {
  fullName: "",
  email: "",
  mobile: "",
  password: "",
  userType: "",
};

export const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [userType, setUserType] = React.useState("buyer");
  const handleClick = () => setShow(!show);
  const [user, setUser] = React.useState(initState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => {
      return { ...prev, userType: userType, [name]: value };
    });
  };

  const handleSubmit = () => {
    if (
      user.fullName === "" ||
      user.password === "" ||
      user.mobile === "" ||
      user.email === ""
    ) {
      alert("Please Enter required Fields");
      return;
    }

    axios
      .post("http://localhost:3001/users", user)
      .then(({ data }) => {
        navigate("/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Heading style={{ textAlign: "center", margin: "30px" }}>
        SignUp with Amazon
      </Heading>
      <div className="signInDiv">
        <Input
          placeholder="Enter your full name"
          style={{ border: "1px solid #E2E8F0" }}
          name="fullName"
          onChange={handleChange}
        />
        <Input
          placeholder="Enter your Email"
          style={{ border: "1px solid #E2E8F0" }}
          name="email"
          onChange={handleChange}
        />
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              placeholder="phone number"
              name="mobile"
              onChange={handleChange}
            />
          </InputGroup>
        </Stack>
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
            <Radio value="buyer" name="userType">
              Buyer
            </Radio>
            <Radio value="seller" name="userType">
              Seller
            </Radio>
          </Stack>
        </RadioGroup>
        <Button onClick={handleSubmit} colorScheme="blue">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

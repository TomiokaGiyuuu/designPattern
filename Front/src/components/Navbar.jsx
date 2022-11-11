import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {
  Link
} from "react-router-dom";
import "./Navbar.css"

const Container = styled.div`
  height: 75px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  margin-right: 40%;
`;

const Navcat = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-left: 10%;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-left: 40%;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to = '/'>
            <Logo>
              YouMe
            </Logo>
          </Link>
        </Left>
        <Center>
          <Link to = '/products/all'>
          <Navcat>
            Menu
          </Navcat>
          </Link>
          <Navcat>
            Rewards
          </Navcat>
          <Navcat>
            Coupons
          </Navcat>
        </Center>
        <Right>
          <Language>EN</Language>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to = "/cart">
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

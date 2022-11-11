import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import {useLocation} from "react-router-dom";
import {useState} from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const ProductsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/", )[2];
    const [filters, setFilters] = useState({});


    const handleFilter = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    console.log(filters)
    return (
    <Container>
      <Navbar />
      <Announcement />
      <ProductsWrapper>
      <Title>Welcome dear customer!</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name = "category" onChange = {handleFilter}>
            <Option disabled >
              Category
            </Option>
            <Option>Drinks</Option>
            <Option>Food</Option>
            <Option>Gift cards</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option >Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      </ProductsWrapper>
      <Newsletter />
        <ProductsWrapper>
      <Footer />
        </ProductsWrapper>
    </Container>
  );
};

export default ProductList;

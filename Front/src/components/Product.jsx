import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
    width: 250px;
    height: 250px;
    object-fit: cover;
    margin-bottom: 100px;
    margin-right: 50px;
`;

const Info = styled.div`
  font-size: 24px;
  text-align: center;
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const AddToCart = styled.div`
  
`


const Product = ({ item }) => {


    class Product{
        constructor(item) {
            this.img = item.img
            this.name = item.name
        }

        get nameOfProduct(){
        }

    }

    class Coffee extends Product{
        constructor(item) {
            super();
        }

        get nameOfProduct(){
            return this.name;
        }
    }

    class Bakery extends Product{
        constructor(item) {
            super();
        }

        get nameOfProduct(){
            return this.name;
        }
    }

    class TotalProducts{
        get Coffee(){
            const coffee = new Coffee(item);
            return coffee.nameOfProduct;
        }
        get Bakery(){
            const bakery = new Bakery(item);
            return bakery.nameOfProduct;
        }
    }

    const prod = new Product(item);
    Object.freeze(prod);
    const totalProducts = new TotalProducts();
  return (
    <Container>
      <Image src ={prod.img} />
      <Info>{prod.nameOfProduct}</Info>
      <AddToCart>
        <ShoppingCartOutlined></ShoppingCartOutlined>
      </AddToCart>
    </Container>
  );
};

export default Product;

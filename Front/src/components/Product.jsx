import {
    Add,
    FavoriteBorderOutlined, Remove,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useState} from "react";
import {Button} from "@material-ui/core";


const Container = styled.div`
    object-fit: cover;
    margin: 20px 0;
    font-size: 22px;
`;

const Info = styled.div`
  font-size: 24px;
  text-align: center;
`


const AddToCart = styled.div`
  
`
const ProductLi = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 15px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 6;
  display: flex;
`;

const Image = styled.img`
  object-fit: cover;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const YouAdded = styled.div`
  font-size: 18px;
  align-self: center;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 3px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Toping = styled.div`
    margin-left: 6px;
`;


const Product = ({ item }) => {


    class Product{
        constructor(item) {
            this.img = item.img
            this.name = item.name
            this.id = item.id
            this.price = item.price
            this.category = item.category
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

    class Decorator{
        constructor(item) {
            this.cost = 0;
        }

        get getCost(){
            return this.cost;
        }
    }

    class Caramel extends Decorator{
        constructor(coffeePrice) {
            super();
            this.cost = coffeePrice + 2;
        }

        get getCost(){
            return this.cost;
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

    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [amountOfCaramel, setAmountOfCaramel] = useState(0);

    const addHandler = () => {
        setAmount(amount + 1);
        setPrice(price + prod.price);
        console.log("works +")
    }
    const onClickDec = () => {
        setAmount(c => Math.max(c - 1, 0));
        setPrice(c => Math.max(c - prod.price, amountOfCaramel * 2));
        console.log("works")
    };

    const addCaramel = () => {
        setAmountOfCaramel(amountOfCaramel + 1);
        setPrice(price + 2);
    }

    const removeCaramel = () => {
        setAmountOfCaramel(c => Math.max(c - 1, 0));
        setPrice(c => Math.max(c - 2, 0));
    }


    return (
    <Container>
      <ProductLi>
      <ProductDetail>
          <Image src={prod.img} />
          <Details>
              <ProductName>
                  <b>Product:</b> {prod.name}
              </ProductName>
              <ProductId>
                  <b>ID: </b> {prod.id}
              </ProductId>
              <ProductId>
                  <b>Price: </b> {prod.price} $
              </ProductId>
              <ProductColor color="black" />
          </Details>
      </ProductDetail>
          <PriceDetail>
              {(prod.category === "Coffee")
              ?
              <div>
              <Toping>
              <ProductId>
                  <b>Caramel: </b> 2 $
              </ProductId>
                  <YouAdded>
                      <b>  You added: </b> {amountOfCaramel}
                  </YouAdded>
              </Toping>
              <Button onClick={addCaramel}>
                  Add Caramel
              </Button>
                  <Button onClick={removeCaramel}>
                      Remove Caramel
                  </Button>
              </div>
              :
              <div>
              </div>
              }
          </PriceDetail>
      <PriceDetail>
          <ProductAmountContainer>
              <Add onClick = {addHandler}/>
              <ProductAmount>{amount}</ProductAmount>
              <Remove onClick = {onClickDec}/>
          </ProductAmountContainer>
          <ProductPrice>$ {price}</ProductPrice>
      </PriceDetail>
    </ProductLi>
    <Hr />
    </Container>
  );
};

export default Product;

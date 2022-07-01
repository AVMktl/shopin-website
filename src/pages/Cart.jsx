import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { mobile } from "../Response";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 0px 20px 20px 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "20px 0px" })}
`;

const Bottom = styled.div`
  display: flex;
  margin: 20px;
  ${mobile({ margin: "0px", flexDirection: "column" })};
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "none" : "2px solid coral")};
  background-color: ${(props) =>
    props.type === "filled" ? "coral" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "coral")};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;

const Image = styled.img`
  height: 150px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div``;

const ProductId = styled.div``;

const ProductColorTag = styled.div`
  padding-right: 7px;
`;

const ProductColorJoint = styled.div`
  display: flex;
  align-items: center;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ProductSize = styled.div``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  background-color: coral;
  color: white;
  border: none;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid coral;
    background-color: transparent;
    color: coral;
  }
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hr = styled.hr`
  height: 2px;
  margin: 20px;
  background-color: #eee;
  border: none;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({ margin: "15px", fontSize: "24px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  ${mobile({ marginTop: "20px" })};
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({ marginTop: "30px" })};
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">SHOP NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-500x500.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>DENNIM JACKET
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123456
                  </ProductId>
                  <ProductColorJoint>
                    <ProductColorTag>
                      <b>Color: </b>
                    </ProductColorTag>
                    <ProductColor color="green" />
                  </ProductColorJoint>
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddCircleOutlinedIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveCircleOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>₹ 2000</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-500x500.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>DENNIM JACKET
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123456
                  </ProductId>
                  <ProductColorJoint>
                    <ProductColorTag>
                      <b>Color: </b>
                    </ProductColorTag>
                    <ProductColor color="green" />
                  </ProductColorJoint>
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddCircleOutlinedIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveCircleOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>₹ 2000</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-500x500.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>DENNIM JACKET
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123456
                  </ProductId>
                  <ProductColorJoint>
                    <ProductColorTag>
                      <b>Color: </b>
                    </ProductColorTag>
                    <ProductColor color="green" />
                  </ProductColorJoint>
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddCircleOutlinedIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveCircleOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>₹ 2000</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-500x500.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>DENNIM JACKET
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123456
                  </ProductId>
                  <ProductColorJoint>
                    <ProductColorTag>
                      <b>Color: </b>
                    </ProductColorTag>
                    <ProductColor color="green" />
                  </ProductColorJoint>
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddCircleOutlinedIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveCircleOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>₹ 2000</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-500x500.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>DENNIM JACKET
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123456
                  </ProductId>
                  <ProductColorJoint>
                    <ProductColorTag>
                      <b>Color: </b>
                    </ProductColorTag>
                    <ProductColor color="green" />
                  </ProductColorJoint>
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddCircleOutlinedIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveCircleOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>₹ 2000</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-500x500.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>DENNIM JACKET
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123456
                  </ProductId>
                  <ProductColorJoint>
                    <ProductColorTag>
                      <b>Color: </b>
                    </ProductColorTag>
                    <ProductColor color="green" />
                  </ProductColorJoint>
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddCircleOutlinedIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveCircleOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>₹ 2000</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ 2000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ -100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ 2000</SummaryItemPrice>
            </SummaryItem>
            <Button>SHOP NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

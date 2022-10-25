import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import SaleItem from './SaleItem';
import axios from 'axios';

import media from '../media';


const Container = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 40px;
      margin-bottom: 80px;
      align-items: center;
      ${media.mobile`
            padding: 0 10px;
      `}
    
`;
const ImageWrapper = styled.div`
      display: flex;
      gap: 10px;
      margin: 0 20px;
      align-items: center;
      ${media.mobile`
            flex-wrap: wrap;
      `}
      
`;
const Title = styled.div`
      display: flex;
      align-items: center;
      margin: 40px 0 20px 0;
      font-size: 28px;
      font-weight: 300;
      ${media.mobile`
            font-size: 20px;
            margin: 20px 0 10px 0;
      `}
`;


const SaleList = () => {

      //FETCH SALE PRODUCTS
      const [products, setProducts] = useState([]);
     

      useEffect(() => {
            const getProducts = async ()  => {
                  try {
                        const res = await axios.get("https://shebossapi.herokuapp.com/api/products/sale");
                        setProducts(res.data);
                       
                  } catch(err) {}
            };
            getProducts();  

      }, []);

      return (

            <Container>
                  <Title>Weekly Deals!! Shop all products at a discount.</Title>

                  <ImageWrapper>
                        {products.map((item) => (
                              <SaleItem item={item} key={item.id} />
                        ))}
                  </ImageWrapper>

            </Container>

      )
}

export default SaleList





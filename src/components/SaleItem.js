import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../media';

const Hover = styled.div`
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.4);
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
`;
const Container = styled.div`
      flex: 1 0 16%;
      margin: 1px;
      height: 220px;
      border: 1px solid #F59794;
      position: relative;
      &:hover ${Hover}{
            opacity: 1;
      }
      ${media.desktop`
            height: 200px;
      `}
      ${media.tablet`
            flex: 1 0 30%;
            height: 150px;
            margin: 3px 2px 40px 2px;   
      `}
      ${media.mobile`
            flex: 1 0 40%;
            height: 180px;
      `}
`;
const Image = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
`;
const Button = styled(Link)`
      width: 80px;
      height: 30px;
      font-size: 13px;
      border-radius: 3px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
            background-color: #e9f5f5;
            transform: scale(1.1);
      }
`;
const Price = styled.div`
      border: none;
      margin-top: 0px;
      display: flex;
      align-items: center;
      gap: 20px;
      ${media.tablet`
            gap: 10px;
      `}
      ${media.mobile`
            gap: 10px;
      `}
`;
const Amount = styled.p`
     font-size: 13px;
     font-weight: 500;
     margin-bottom: 8px;
     color: #cc0000;
     ${media.desktop`
          font-size: 11px;   
      `}
      ${media.tablet`
            font-size: 10px;   
      `}
     ${media.mobile`
            font-size: 12px;   
      `}
`;
const OldPrice = styled.p`
     color: gray;
     font-size: 13px;
     font-weight: 300;
     text-decoration: line-through;
     margin-bottom: 8px;
      ${media.desktop`
          font-size: 11px;   
      `}
      ${media.tablet`
            font-size: 10px;   
      `}
     ${media.mobile`
            font-size: 12px;   
      `}
`;
const Desc = styled.p`
     font-size: 12px;
     font-weight: 300;
     margin-bottom: 5px;
     ${media.desktop`
          font-size: 11px;   
      `}
      ${media.tablet`
            font-size: 8px;   
      `}
     ${media.mobile`
            font-size: 12px;   
      `}
`;


const SaleItem = ({item}) => {

      const scrollToTop = () => {
            window.scrollTo(0, 0)
      }


      return (
            <Container>
                  <Image src={item.img} />
                  <Hover>
                        <Button to={`/product/${item._id}`} onClick={scrollToTop}>Add to Cart</Button>
                  </Hover>
                  
                  <Desc>{item.desc}</Desc>
                 
                  <Price>
                     <Amount>ugx{item.newPrice?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</Amount>
                      <OldPrice>ugx{item.price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</OldPrice>
                  </Price>

            </Container>
  )
}

export default SaleItem
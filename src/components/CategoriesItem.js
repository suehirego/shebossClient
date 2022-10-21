import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from '../media';


const Container = styled.div`
      display: flex;
      flex:1;
      margin: 0 0 70px 0;
      align-items: center;
      position: relative;
      justify-content: space-between;
      ${media.mobile`
            flex: 1 0 40%;
            margin: 3px 2px 20px 2px;   
      `}
`;
const Image = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(65%);
      /* border-radius: 50%; */
`;

const Info = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`;

const Title = styled.h2`
    color:white;
    margin-bottom: 20px;
    ${media.mobile`
    font-size: 22px;
      `}
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #f10088;
    color: #fbfbfd;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 600;
`;


const CategoriesItem = ({ item }) => {

      const scrollToTop = () => {
            window.scrollTo(0, 0)
      }

      return (
            <Container>
                  <Link to={`/products/${item.cat}`} onClick={scrollToTop}>
                        <Image src={item.img} />
                        <Info>
                              <Title >{item.title}</Title >
                              <Button>Shop Now</Button>
                        </Info>
                  </Link>

            </Container>
      )
}

export default CategoriesItem
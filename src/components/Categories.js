import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';
import media from '../media';


const Container = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 40px;
      margin: 0 0 20px 0;
      align-items: center;
      background-color: #ddebe3 !important;
      ${media.mobile`
            font-size: 20px;
      `}
`;
const ImageWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
`;
const Title = styled.div`
      display: flex;
      align-items: center;
      margin: 40px 0 20px 0;
      font-size: 28px;
      font-weight: 300;
      ${media.mobile`
            font-size: 20px;
      `}
      
`;

const Categories = () => {
      return (
            <Container>
                  <Title>Support independent sellers only on Sheboss.</Title>

                  <ImageWrapper>
                        {categories.map((item) => (
                              <CategoriesItem item={item} key={item.id} />
                        ))}
                  </ImageWrapper>
            </Container>
      )
}

export default Categories
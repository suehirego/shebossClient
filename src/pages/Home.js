import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import FooterCom from '../components/FooterCom';
import Newsletter from '../components/Newsletter';
import NavLinks from '../components/NavLinks';
// import Products from '../components/Products';
import SaleList from '../components/SaleList';

const Container = styled.div`
`;
const TopNav = styled.div`
      top: 0;
      position: sticky;
      z-index: 999;
`;

const Home = () => {
      return (
            <Container>
                  <TopNav>
                        <Announcement/>
                        <Navbar/>
                        <NavLinks/>
                  </TopNav>

                  <Slider/>
                  <Categories/>
                  <SaleList/>
                  <Newsletter/>
                  <FooterCom/>
            </Container>
      )
}

export default Home
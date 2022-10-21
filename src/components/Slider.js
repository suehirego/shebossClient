import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { sliderItems } from "../data";
import media from '../media';


const Container = styled.div`
      width: 100%; 
      height: 75vh;
      display: flex;
      overflow: hidden;
      background-color: teal;
      position: relative;
      ${media.mobile`
            align-items: center;
            justify-content: center;
    `}
`;
const Arrow = styled.div`
      width: 35px; 
      height: 35px;
      background-color: #fbfbfd;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: ${(props) => props.direction === "left" && "10px"};
      right: ${(props) => props.direction === "right" && "10px"};
      margin: auto;
      cursor: pointer;
      opacity: 0.5;
      z-index: 2;
      ${media.mobile`
            width: 25px; 
            height: 25px;
      `}

`;
const Wrapper = styled.div`
      height: 100%;
      display: flex;
      transition: all 1.5s ease;
      transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
      width: 100vw;
      height: 75vh;
      display: flex;
      align-items: center;
`;

const InfoContainer = styled.div`
      flex: 1;
      padding: 50px 190px;
      display: flex;
      color: white;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      ${media.mobile`
            padding: 50px 50px;
     `}
`;

const Title = styled.h1`
      font-size: 50px;
      ${media.mobile`
            font-size: 40px;
      `}
`;

const Desc = styled.p`
      margin: 20px 0px;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 1px;
      text-align: center;
      ${media.mobile`
      font-size: 18px;
    `}
`;



const Slider = () => {

      const [slideIndex, setSlideIndex] = useState(0);
      const handleClick = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
        } else {
          setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
        }
      };


      return (
            <Container>
                  <Arrow direction="left" onClick={() => handleClick("left")}>
                        <IoMdArrowDropleft style={{ fontSize: 25}}/>
                  </Arrow>

                  <Wrapper slideIndex={slideIndex}>

                        {sliderItems.map((item) =>(
                        <Slide 
                              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55),rgba(0, 0, 0, 0.55)), url(${item.bgImage})` }}
                              key={item.id}
                        >
                              <InfoContainer>
                                    <Title>{item.title}</Title>
                                    <Desc>{item.desc}</Desc>
                              </InfoContainer>

                        </Slide>
                        ))}
                        

                  </Wrapper>

                  <Arrow direction="right" onClick={() => handleClick("right")}>
                        <IoMdArrowDropright style={{ fontSize: 25}}/>
                  </Arrow>
            </Container>
      )
}

export default Slider
import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade bottom> 
      <ItemText>
        <h1>{props.title} </h1>
        <p> {props.desc} </p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom> 
        <ButtonGroup>
          <LeftButton> {props.leftBtnText}</LeftButton>
          {props.rightBtnText && <RightButton>{props.rightBtnText} </RightButton>}
          
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props=>`url("/images/${props.bgImage} ")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 10vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 5px;
  @media(max-width:768px){
      flex-direction:column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin:8px; 
`;

const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
`;

const DownArrow = styled.img`
  margin-top: 0 35px;
  text-align:center;
  justify-items:center;
  align-items:center;
  height: 40px;
  animation: animateDown infinite 1.5s;
  cursor:pointer;
`;

const Buttons= styled.div``

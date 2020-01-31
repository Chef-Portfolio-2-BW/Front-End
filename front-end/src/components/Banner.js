import React from 'react';
import styled from "styled-components";

const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
`
const FoodImages = styled.img`
    max-width: 25%;
`
export default function Banner (){
    return(
            <ImgContainer>
                <FoodImages src={require('../img/slide01.jpg')}></FoodImages>
                <FoodImages src={require('../img/slide02.jpg')}></FoodImages>
                <FoodImages src={require('../img/slide03.jpg')}></FoodImages>
                <FoodImages src={require('../img/slide04.jpg')}></FoodImages>
                <FoodImages src={require('../img/slide05.jpg')}></FoodImages>
                <FoodImages src={require('../img/slide06.jpg')}></FoodImages>
                <FoodImages src={require('../img/slide07.jpg')}></FoodImages>
                <FoodImages src={require('../img/slide08.jpg')}></FoodImages>
            </ImgContainer>
    )
}

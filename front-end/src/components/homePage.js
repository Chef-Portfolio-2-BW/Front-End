import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Body = styled.div`
    background: #40566B;
`

const Header = styled.div`
    // margin-bottom: 2%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: black;
`

const FoodImages = styled.img`
    max-width: 25%;
    // border: 2px solid #fd9827;
    // border-radius: 10px;
`
const MainSection = styled.section`
    // margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    padding: 0.5%;
    // max-width: 900px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #fd9827;
`
const Logo = styled.img`
    width: 200px;
`
const LinkContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
`
const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    // max-width: 750px;

`



export default function HomePage() {
    return (
        <Body>
        <Header>
            <Logo src={require('../img/chefhub.jpg')}></Logo>
        </Header>
        <LinkContainer>
            <Link to={'/login'}>Login </Link>
            <Link to={'/signup'}>Sign Up</Link>
            </LinkContainer>
        <MainSection>
            <h1>
                Welcome to ChefHub!
            </h1>
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
            <p>
            Bringing amateur and professional chefs together, in one kitchen.
            </p>






        </MainSection>
        </Body>
    )
}
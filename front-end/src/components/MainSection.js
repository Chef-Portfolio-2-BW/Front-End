import React from 'react';
import styled from "styled-components";

import Carousel from './Carousel';

const MainSectionContent = styled.section`
    margin-top: 0.5%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 0.5%;
    padding: 0.5%;
    width: 90%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #fd9827;
`


const MainSectionContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Paragraph = styled.p`
    font-style: italic;
`

export default function MainSection () {
    return (
        <MainSectionContainer>
            <MainSectionContent>
                <h1>
                    Welcome to ChefHub!
                </h1>
                <Carousel />
                <Paragraph>
                Bringing amateur and professional chefs together, in one kitchen.
                </Paragraph>
            </MainSectionContent>
        </MainSectionContainer>
    )
}
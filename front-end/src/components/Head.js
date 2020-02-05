import React from 'react';
import styled from "styled-components";

const Head = styled.div`
    padding-top: 1%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: black;
`
const Logo = styled.img`
    width: 250px;
`

export default function Header() {
    return (
        <div>
            <Head>
                <Logo src={require('../img/chefhub.jpg')}></Logo>
            </Head>
        </div>
    )
}
import React from 'react';
import styled from "styled-components";

const Head = styled.div`
    // margin-bottom: 2%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: black;
`
const Logo = styled.img`
    width: 175px;
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
import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/"><Logo src={require('../img/chefhub.jpg')}></Logo></Link>
            </Head>
        </div>
    )
}

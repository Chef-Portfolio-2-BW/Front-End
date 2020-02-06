import React from 'react';
import styled from "styled-components";

import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: black;
    width: 50%;
`
const Copyright = styled.p`
    background: black;
    color: white;
    font-size: 0.7rem;
`
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    align-items: center;
    background: black;
    margin-top: 30px;
`

export default function Footer () {
    return (
        <FooterContainer>
        <SocialLinks/>
        {/* <LinkContainer>
            <Link className='nav-link' to={'/login'}>Login </Link>
            <Link className='nav-link' to={'/signup'}>Sign Up</Link>
        </LinkContainer> */}
        <Copyright>
            Copyright ChefHub 2020, All Rights Reserved.
            </Copyright>
        </FooterContainer>
    )
}

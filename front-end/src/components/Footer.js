import React from 'react';
import styled from "styled-components";

import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    align-items: center;
    background: black;
`

export default function Footer () {
    return (
        <FooterContainer>
        <SocialLinks/>
        <LinkContainer>
            <Link class='nav-link' to={'/login'}>Login </Link>
            <Link class='nav-link' to={'/signup'}>Sign Up</Link>
        </LinkContainer>
        <Copyright>
            Copyright ChefHub 2020, All Rights Reserved.
            </Copyright>
        </FooterContainer>
    )
}
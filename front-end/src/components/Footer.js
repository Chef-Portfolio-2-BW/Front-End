import React from 'react';
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';

import { Link } from 'react-router-dom';

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    background: black;
`
const Copyright = styled.p`
    background: black;
    color: white;
    font-size: 0.7rem;
`
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: black;
`

export default function Footer () {
    return (
        <FooterContainer>
        <LinkContainer>
            <Link class='nav-link' to={'/login'}>Login </Link>
            <Link class='nav-link' to={'/signup'}>Sign Up</Link>
        </LinkContainer>
        <SocialIcon url="http://facebook.com" />
        <SocialIcon url="http://twitter.com" />
        <SocialIcon url="http://instagram.com" />
        <SocialIcon url="http://googleplus.com" />

        <Copyright>
            Copyright ChefHub 2020, All Rights Reserved.
            </Copyright>
        </FooterContainer>
    )
}

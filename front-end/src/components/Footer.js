import React from 'react';
import styled from "styled-components";

import SocialLinks from './SocialLinks';

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
        <Copyright>
            Copyright ChefHub 2020, All Rights Reserved.
            </Copyright>
        </FooterContainer>
    )
}

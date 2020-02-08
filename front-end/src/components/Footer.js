import React from 'react';
import styled from "styled-components";
// import {Link} from 'react-router-dom';
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

const Footer = (props) => {
    return (
        <FooterContainer>
        <SocialLinks/>
        <a href='https://elastic-curie-dc6000.netlify.com/index.html#'><button className="add-button" >Marketing</button></a>
        <Copyright>
            Copyright ChefHub 2020, All Rights Reserved.
            </Copyright>
        </FooterContainer>
    )
}

export default Footer;

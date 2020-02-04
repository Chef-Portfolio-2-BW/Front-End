import React from 'react';
import styled from "styled-components";

import Head from './Head';
import Nav from './Nav';
import MainSection from './MainSection';
import Footer from './Footer';

const Body = styled.div`
    background: #40566B;
`


export default function HomePage() {
    return (
        <Body>
        <Head />
        <Nav />
        <MainSection />
        <Footer />
        </Body>
    )
}

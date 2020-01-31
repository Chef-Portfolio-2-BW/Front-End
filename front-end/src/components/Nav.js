import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const LinkContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    background: black;
`

export default function Nav () {
    return (
        <LinkContainer>
            <Link class='nav-link' to={'/login'}>Login </Link>
            <Link class='nav-link' to={'/signup'}>Sign Up</Link>
        </LinkContainer>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const LinkContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: black;
    margin-bottom: 1%;
`

export default function Nav () {
    return (
        <LinkContainer>
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/login'}>Login </Link>
            <Link className='nav-link' to={'/signup'}>Sign Up</Link>
            <Link className='nav-link' to={'/profile'}>Profile</Link>
        </LinkContainer>
    )
}
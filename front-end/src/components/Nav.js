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

const Nav = (props) => {

  const logout= () =>{
    localStorage.removeItem('token');
    props.setCurrentUser({name:'', loggedIn:false, id:''});
    // props.history.push('/');

  };

    return (
        <LinkContainer>
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className={`nav-link${props.currentUser.loggedIn ? ' logged-in' :""}`} to={'/login'}>Login </Link>
            <Link className={`nav-link${props.currentUser.loggedIn ? ' logged-in' :""}`} to={'/signup'}>Sign Up</Link>
            <Link className={`nav-link${props.currentUser.loggedIn ? "" :' logged-in'}`} to={'/profile'}>Profile</Link>
            <Link className={`nav-link${props.currentUser.loggedIn ? "" :' logged-in'}`} onClick={()=>logout()}>Log Out</Link>
        </LinkContainer>
    )
}

export default Nav;

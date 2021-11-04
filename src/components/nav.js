import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';


const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding: 3rem;

    @media (min-width:768px) {
        padding-bottom: 0;

    }
`;

const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    &.actual-page {
        border-bottom: 2px solid #FFF;
    }
`;

const Navigation = () => {
    return ( 
        <Nav>
            <NavLink to={'/'} activeClassName="actual-page">Inicio</NavLink>
            <NavLink to={'/nosotros'} activeClassName="actual-page">Nosotros</NavLink>
        </Nav>
     );
}
 
export default Navigation;
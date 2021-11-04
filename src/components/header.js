import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Navigation from './nav';


const LinkHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return ( 
        <header
            css={css`
                background-color: rgba(44,62,80);
                padding: 1rem;
            `}            
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <LinkHome to='/'>
                    <h1>Hotel Gatsby</h1>
                </LinkHome>
                
                <Navigation />
            </div>
        </header>
     );
}
 
export default Header;
import { css, Global } from '@emotion/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import useSeo from '../hooks/useSeo';
import Footer from './Footer';
import Header from './header';



const Layout = ({ children }) => {

    const seo = useSeo();

    const { siteName, fallbackSeo: { description, title } } = seo;

    return ( 
        <>
            <Global 
                styles={css`
                    
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }

                    *, *:before, *:after {
                        box-sizing: inherit;
                    }

                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans',sans-serif;
                    }
                    
                    h1,h2,h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1,h2 {
                        font-family: 'Roboto', serif;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                `}
            />

            <Helmet>
                <title>{title}</title>    
                <meta name="description" content={description} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header />
            {children}
            <Footer 
                title={title}
            />
        </>
     );
}
 
export default Layout;
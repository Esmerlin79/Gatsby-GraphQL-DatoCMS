import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ContentUsStyle = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }

    line-height: 2;
    margin-top: 2rem;
`;

const ContentUs = () => {

    const content = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: { slug: { eq:"nosotros" } }) {
                nodes {
                     titulo
                    contenido
                    imagen {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const { titulo, contenido, imagen } = content.allDatoCmsPagina.nodes[0];

    return ( 
        <>
            <h2
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{titulo}</h2>

            <ContentUsStyle>
                <p>{contenido}</p>
                <GatsbyImage 
                    image={imagen.gatsbyImageData} 
                    alt="nosotros"
                />
            </ContentUsStyle>
        </>
     );
}
 
export default ContentUs;
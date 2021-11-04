import { css } from "@emotion/react"
import styled from "@emotion/styled"
import * as React from "react"
import BedroomsPreview from "../components/BedroomsPreview"
import ContentHome from "../components/ContentHome"
import ImageHotel from "../components/imageHotel"
import Layout from "../components/layout"
import useBedrooms from "../hooks/useBedrooms"


const BedroomsList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;



const IndexPage = () => {
  
  const bedrooms = useBedrooms();

  return (
    <Layout>
      <ImageHotel />
      <ContentHome />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras Habitaciones
      </h2>

      <BedroomsList>
        {
          bedrooms.map( bedroom => (
              <BedroomsPreview 
                key={bedroom.id}
                {...bedroom}
              />
          ))
        }
      </BedroomsList>
    </Layout>
  );
}

export default IndexPage

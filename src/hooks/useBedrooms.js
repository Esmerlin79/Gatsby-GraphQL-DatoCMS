const { useStaticQuery, graphql } = require("gatsby");


const useBedrooms = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacion {
                nodes {
                     titulo
                     id
                     slug
                     contenido
                     imagen {
                        gatsbyImageData
                     }
                }
             }
        }
    `);

    return data.allDatoCmsHabitacion.nodes.map( bedroom => ({
        titulo: bedroom.titulo,
        id: bedroom.id,
        contenido: bedroom.contenido,
        imagen: bedroom.imagen,
        slug: bedroom.slug,
    }));
}
 
export default useBedrooms;
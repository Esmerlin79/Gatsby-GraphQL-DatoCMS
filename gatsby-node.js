exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions

  const result = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `);
  
  if(result.errors) {
    reporter.panic('No hubo resultados', result.errors);
  }

  const bedrooms = result.data.allDatoCmsHabitacion.nodes;

  bedrooms.forEach( bedroom => {
    createPage({
      path: bedroom.slug,
      component: require.resolve("./src/components/BedroomsTemplate.js"),
      context: {
        slug: bedroom.slug
      },
      // defer: true,
    })
  })

}

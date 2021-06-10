const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};

// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       allHomeJson {
//         edges {
//           node {
//             gallery {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   data.allHomeJson.edges.forEach(edge => {
//     const slug = edge.node.gallery.slug
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/pages/post.js`),
//       context: { slug: slug },
//     })
//   })
// }
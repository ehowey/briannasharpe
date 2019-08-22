/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const featuredList = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allPublished(
  //       sort: { fields: date, order: ASC }
  //       filter: { featured: { eq: true } }
  //     ) {
  //       nodes {
  //         id
  //         title
  //         date
  //         publication
  //         url
  //         category
  //       }
  //     }
  //   }
  // `);
  // const writing = data.allPublished.nodes;
  return (
    <h1>Featured List</h1>
    // <ul>
    //   {writing.map(published => (
    //     <li key={published.id}>
    //       <a href={published.url} target="_blank" rel="noopener noreferrer">
    //         <h3>{published.title}</h3>
    //       </a>
    //       {new Date(published.date).toLocaleDateString("en-US", {
    //         month: "long",
    //         day: "numeric",
    //         year: "numeric"
    //       })}{" "}
    //       in {published.publication}
    //     </li>
    //   ))}
    // </ul>
  );
};

export default featuredList;

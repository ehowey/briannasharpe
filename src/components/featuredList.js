/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const featuredList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityCategory {
        nodes {
          title
          children {
            ... on SanityPublishedWork {
              id
              link
              publishedBy
              publishedDate
              title
            }
          }
        }
      }
    }
  `);
  const writing = data.allSanityCategory.nodes;
  return (
    <ul>
      {writing.map(published => (
        <li key={published.children.id}>
          <h3>{published.children}</h3>
        </li>
      ))}
    </ul>
  );
};

export default featuredList;

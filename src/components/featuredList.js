/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const featuredList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork(filter: { featured: { eq: true } }) {
        nodes {
          title
          id
          link
          publisher
          date
        }
      }
    }
  `);
  const writing = data.allSanityPublishedWork.nodes;
  return (
    <ul>
      {writing.map(published => (
        <li key={published.id}>
          <p>{published.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default featuredList;

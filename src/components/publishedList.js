/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const publishedList = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPublishedWork {
        nodes {
          id
          title
          publishedBy
          publishedDate
          link
        }
      }
    }
  `);
  const writing = data.allSanityPublishedWork.nodes;
  return (
    <ul>
      {writing.map(published => (
        <li key={published.id}>
          <a href={published.link} target="_blank" rel="noopener noreferrer">
            <h3>{published.title}</h3>
          </a>
          {new Date(published.publishedDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}{" "}
          in {published.publishedBy}
        </li>
      ))}
    </ul>
  );
};

export default publishedList;

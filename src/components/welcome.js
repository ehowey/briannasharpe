/** @jsx jsx */
import { jsx } from "theme-ui";
import { ButtonInternal } from "gatsby-theme-catalyst-core";

const SiteWelcome = props => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1
        sx={{
          fontSize: 7,
          textAlign: "center"
        }}
      >
        {props.text}
      </h1>
      <ButtonInternal to="/published-work" text="Published Work" />
    </div>
  );
};

export default SiteWelcome;

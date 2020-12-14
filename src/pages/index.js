import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "Lato, sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  lineHeight: "1.5em",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: "#3E3831",
};

const subHeadingStyles = {
  color: "#aaaaaa",
  fontSize: "16px",
};

const detailsStyles = {
  maxWidth: "580px",
  padding: "0 10px",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Marc Bodmer</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      ></link>
      <h1 style={headingStyles}>Marc Bodmer</h1>
      <div style={detailsStyles}>
        <h2 style={subHeadingStyles}>About</h2>
        <p>
          👋 I am a web developer working at{" "}
          <a href="https://www.cloudflare.com/">Cloudflare</a> in San Francisco.
          I've previously worked at companies such as{" "}
          <a href="http://teehanlax.com/" target="_blank">
            Teehan+Lax
          </a>
          , one of the most influential digital agencies in the world during its
          time, and{" "}
          <a href="http://500px.com/" target="_blank">
            500px
          </a>
          , the premier photography community on the internet.
        </p>
        <h2 style={subHeadingStyles}>Contact</h2>
        <p>
          ✉️ <a href="mailto:marc.bodmer@gmail.com">Email</a>
        </p>
        <p>
          💼{" "}
          <a href="https://www.linkedin.com/in/marc-bodmer-dev" target="_blank">
            LinkedIn
          </a>
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

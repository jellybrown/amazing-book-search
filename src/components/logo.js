import React, { memo } from "react";

const Logo = memo((props) => {
  return (
    <div style={{ textAlign: "center", padding: "2em 0" }}>
      <a style={{ textDecoration: "none" }} href="#a">
        <span style={{ fontSize: "2rem", fontWeight: "800", color: "#333" }}>
          Book
        </span>
        <span style={{ fontSize: "1rem", color: "#333" }}>.search</span>
      </a>
    </div>
  );
});

export default Logo;

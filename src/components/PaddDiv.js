import React from "react";
import { useSelector } from "react-redux";

const PaddDiv = ({ tag, children }) => {
  const show = useSelector((state) => state.page.show);
  console.log(show);
  return (
    <div
      style={{
        position: "relative",

        borderRadius: "15px",
        marginTop: "5px",
        marginRight: "5px",
        marginLeft: "5px",
        border: show ? "1px red solid" : "1px transparent solid",
        transition: "all 0.5s",
      }}
      className="d-flex justify-content-center"
    >
      <p
        className="h2 text-danger d-flex align-items-center"
        style={{
          position: "absolute",
          left: "3px",
          top: 0,
          bottom: 0,
          opacity: show ? 1 : 0,
          transition: "all 0.5s",
        }}
      >
        {`<${tag}>`}
      </p>
      <div style={{ padding: "0 2rem", width: "70%" }}>{children}</div>
      <p
        className="h2 text-danger d-flex align-items-center"
        style={{
          position: "absolute",
          right: "3px",
          top: 0,
          bottom: 0,
          opacity: show ? 1 : 0,
          transition: "all 0.5s",
        }}
      >
        {`</${tag}>`}
      </p>
    </div>
  );
};

export default PaddDiv;

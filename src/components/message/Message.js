import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../features/pageSlice";

const Message = ({ children }) => {
  const show = useSelector((state) => state.page.show);
  const dispatch = useDispatch();

  const handleCssButton = () => {
    dispatch(setShow("css"));
  };
  const handleJsButton = () => {
    dispatch(setShow("js"));
  };

  const handleHtmlButton = () => {
    dispatch(setShow("html"));
  };
  return (
    <section
      className="message-container"
      style={
        show === "html"
          ? {
              opacity: 1,
              backgroundColor: "#ffa071",
            }
          : show === "css"
          ? {
              opacity: 1,
              backgroundColor: "#80cee1",
            }
          : show === "js"
          ? {
              opacity: 1,
              backgroundColor: "#fdfd96",
            }
          : {
              opacity: 0,
            }
      }
    >
      {show === "css" ? (
        <button className="button-tech button-html" onClick={handleHtmlButton}>
          HTML
        </button>
      ) : (
        <button className="button-tech button-css" onClick={handleCssButton}>
          CSS
        </button>
      )}
      {children}
      {show === "js" ? (
        <button className="button-tech button-html" onClick={handleHtmlButton}>
          HTML
        </button>
      ) : (
        <button className="button-tech button-js" onClick={handleJsButton}>
          JAVASCRIPT
        </button>
      )}
    </section>
  );
};

export default Message;

import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Message from "./components/message/Message";
import NavbarBs from "./components/NavbarBs";
import "./styles/styles.scss";

function App() {
  const show = useSelector((state) => state.page.show);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [show]);
  return (
    <div>
      <NavbarBs />
      <Container className="container-page" style={{ position: "relative" }}>
        <Message>
          {show === "html" ? (
            <p>
              For a little introduction, these are <u>HTML</u> tags, basically
              are the elements in a website.
            </p>
          ) : show === "css" ? (
            <p>
              <u>CSS</u> is for giving some styling to HTML elements, like text
              alignment or the size of things.
            </p>
          ) : show === "js" ? (
            <p>
              <u>Javascript</u>, is to tell the elements or the site what to do
              and how to do it, such as when this message should appear.
            </p>
          ) : null}
        </Message>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import PaddDiv from "./PaddDiv";
import { setShow } from "../features/pageSlice";

const Home = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.page.show);
  console.log(show);
  const handleDispatch = (ref) => {
    if (show !== "") {
      dispatch(setShow(""));
    } else {
      dispatch(setShow("html"));
    }
  };

  return (
    <div className="text-center">
      <PaddDiv tag={"h1"}>
        <h1>Hi future developer!</h1>
      </PaddDiv>
      <section>
        <PaddDiv tag={"p"}>
          <p className="h3">
            I know that entering the world of development is difficult, but
            nothing begins without a first step
          </p>
        </PaddDiv>

        <PaddDiv tag={"p"}>
          <p className="h4">so...</p>
        </PaddDiv>
        <PaddDiv tag={"p"}>
          <p className="h3">
            if u want to learn about the web development enviorement, this is
            your place..
          </p>
        </PaddDiv>
      </section>
      <PaddDiv tag={"h2"}>
        <h2>But.. Who am i?</h2>
      </PaddDiv>
      <section className="d-flex text-start">
        <article>
          <PaddDiv tag={"h2"}>
            <h2>First of all</h2>
          </PaddDiv>
          <PaddDiv tag={"p"}>
            <p>
              I am not a expert or a senior, i still learning something new
              every day like you, but learn together surely is more fun!
            </p>
          </PaddDiv>
        </article>
        <article>
          <PaddDiv tag={"h2"}>
            <h2>Why create this...</h2>
          </PaddDiv>
          <PaddDiv tag={"p"}>
            <p>
              I took a degree in a university, but the truth is that I learned
              more studying alone :0, and I know how difficult it is to try to
              enter this field without knowing anything, so here I share my
              knowledge in the way that I would have liked to learn.
            </p>
          </PaddDiv>
        </article>
      </section>
      <section>
        <PaddDiv tag={"p"}>
          <p className="h2">
            By the way, helps me to <u>practice</u>
          </p>
        </PaddDiv>
        <PaddDiv tag={"p"}>
          <p className="h2">remember that..</p>
        </PaddDiv>
        <PaddDiv tag={"p"}>
          <p className="h1">
            <u>PRACTICE</u>!!
          </p>
        </PaddDiv>
        <PaddDiv tag={"p"}>
          <p className="h2">no one will do it for you!</p>
        </PaddDiv>
      </section>
      <section>
        <PaddDiv tag={"p"}>
          <p className="h2">
            After this boring presentation, maybe we can start!!
          </p>
        </PaddDiv>

        <PaddDiv tag={"button"}>
          <div className="d-flex gap-5 justify-content-center mt-5">
            <p className="h2">🡦</p>
            <p className="h2">🡣</p>
            <p className="h2">🡧</p>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <p className="h2">🡢</p>

            <button className="button-general" onClick={handleDispatch}>
              Click Me!!
            </button>
            <p className="h2">🡠</p>
          </div>
          <div className="d-flex gap-5 justify-content-center mt-3">
            <p className="h2">🡥</p>
            <p className="h2">🡡</p>
            <p className="h2">🡤</p>
          </div>
        </PaddDiv>
      </section>
    </div>
  );
};

export default Home;

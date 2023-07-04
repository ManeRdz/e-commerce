import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naveg = useNavigate();
  return (
    <>
      <section className="mainhome">
        <div className="info">
          <p>
            Experience the vision of the MotoGP pro racers wearing one of his
            helmets
          </p>
          <p>Lets go for it!</p>
          <button
            onClick={() => {
              naveg("/helmets");
              window.scrollTo({ top: 0 });
            }}
          >
            Buy it now!
          </button>
        </div>
      </section>
      <section className="secondhome">
        <div className="info2">
          <p>
            Improve your riding skills with the best grip and confort for your
            hands!
          </p>
          <p>Lets go for it!</p>
          <button
            onClick={() => {
              naveg("/gloves");
              window.scrollTo({ top: 0 });
            }}
          >
            Buy it now!
          </button>
        </div>
      </section>
      <section className="thirdhome">
        <div className="info3">
          <p>Never fail a gear shift with the best boots!</p>
          <p>Lets go for it!</p>
          <button
            onClick={() => {
              naveg("/boots");

              window.scrollTo({ top: 0 });
            }}
          >
            Buy it now!
          </button>
        </div>
      </section>
      <section className="fourthhome">
        <div className="info4">
          <p>Show what are you made of at the track wearing the best suit!</p>
          <p>Lets go for it!</p>
          <button
            onClick={() => {
              naveg("/suits");
              window.scrollTo({ top: 0 });
            }}
          >
            Buy it now!
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

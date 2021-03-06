import React from "react";
// importing all components
// import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="section">
      {/* <Navigation /> */}
      <div className="home-wrapper">
        {/* spinning circles */}
        <div className="silhouette">
          <div className="silhouette2">
            <div className="silhouette3"></div>
          </div>
        </div>
        {/* lines on the left side */}
        <div className="welcome-animation">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        {/* welcome text */}
        <header className="hero">
          <div className="hero-text">
            <h1>
              Hey, you found me!{" "}
              <span className="swoosh-text">
                <p>Welcome!</p>
                <p>Thanks for stopping by.</p>
                <p className="lastText">Scroll down to see more.</p>
              </span>
            </h1>
            <h2>
              My name is <span>Viviane Wei Busch-Wallace</span>.
            </h2>
            <h2>
              I'm a junior <span>fullstack web developer</span>.
            </h2>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Home;

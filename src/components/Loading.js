import React from "react";

const Loading = () => {
  return (
    <div className="section loading">
      <h2>Collecting all nuts for you...</h2>
      <div className="squirrel-giphy">
        <div>
          <iframe
            src="https://giphy.com/embed/l2JI2G6JqnSz8uEOk"
            title="squirrel giphy"
            width="100%"
            height="100%"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          {/* <a href="https://giphy.com/gifs/squirrel-eden-l2JI2G6JqnSz8uEOk">
              via GIPHY
            </a> */}
        </p>
      </div>
    </div>
  );
};
export default Loading;

// issues encountered:
// who is the parent of Loading, if not body? body's width and height are set, yet when I make loading inherit it, it does not work.

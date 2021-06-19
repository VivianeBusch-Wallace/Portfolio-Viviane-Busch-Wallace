import React, { useState, useEffect } from "react";

const Loading = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  // if (loading)
  //   return (
  //     <div className="section loading">
  //       <h3>Loading finished</h3>
  //       <div className="squirrel-giphy">
  //         <div>
  //           <iframe
  //             src="https://giphy.com/embed/l2JI2G6JqnSz8uEOk"
  //             width="100%"
  //             height="100%"
  //             frameBorder="0"
  //             className="giphy-embed"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //         <p>
  //           {/* <a href="https://giphy.com/gifs/squirrel-eden-l2JI2G6JqnSz8uEOk">
  //             via GIPHY
  //           </a> */}
  //         </p>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="section loading">
      <h3>Loading finished</h3>
      <div className="squirrel-giphy">
        <div>
          <iframe
            src="https://giphy.com/embed/l2JI2G6JqnSz8uEOk"
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

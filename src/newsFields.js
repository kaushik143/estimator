import React, { Component } from "react";
import "./newsFields.css";

class NewsFields extends Component {
  render() {
    return (
      <div className="newsContainer">
        <div className="NewsSection">
          <div className="Label">News</div>
          <div className="Value"></div>
        </div>
        <div className="VideosSection">
          <div className="Label">Questions and answers</div>
          <div className="Value">
            <iframe
              src="https://www.youtube.com/embed/OZcRD9fV7jo"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              height="316px"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export { NewsFields };

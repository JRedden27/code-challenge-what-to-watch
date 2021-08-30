import React from "react";

const MovieCard = (props) => {
  return (
    <div className="d-flex border" style={{ height: "15rem", width: "400px" }}>
      <div className="flex-shrink-0">
        <img src={props.img} alt="..." style={{ height: "100%" }} />
      </div>
      <div className="flex-grow-1 m-3">
        <p className="fw-bold" style={{ fontSize: 12 }}>
          {props.title}
        </p>
        <p className="lh-1" style={{ fontSize: 11 }}>
          {props.description}
        </p>
        <div className="row">
          <div className="col-6 lh-1">
            <p className="small" style={{ fontSize: 11 }}>
              Release Date: {props.date}
            </p>
            <p className="small" style={{ fontSize: 11 }}>
              Rating: {props.rating}/10
            </p>
            <br></br>
            <p className="small fw-lighter" style={{ fontSize: 10 }}>
              Last Updated: {props.updated}
            </p>
          </div>
          <div className="col">
            {props.rating >= 5 && (
              <img
                src="https://cdn0.iconfinder.com/data/icons/basic-8/97/4-512.png"
                alt="thumbs up"
                style={{ width: "75px" }}
              />
            )}
            {props.rating < 5 && (
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/thumbs-down-circle-red-512.png"
                alt="thumbs down"
                style={{ width: "75px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

import React from "react";

const MovieCard = (props) => {
  return (
    <div className="d-flex border" style={{ height: "15rem", width: "500px" }}>
      <div className="flex-shrink-0">
        <img src={props.img} alt="..." style={{ height: "100%" }} />
      </div>
      <div className="flex-grow-1 ms-3">
        <p className="fw-bold small">{props.title}</p>
        <p className="small lh-1">{props.description}</p>
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
            <img
              src="https://s3.amazonaws.com/heights-photos/wp-content/uploads/2020/10/05200825/thumbs-up-01.png"
              alt="thumbs up"
              style={{ width: "90px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

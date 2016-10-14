import React from 'react';

const Destination = props => {

  return(
    <div className="row">
      <div className="row center-align">
        <h3>{props.name}</h3>
      </div>
      <div className="row">
        <div className="col s2 offset-s2">
          <img src={props.image_url}></img>
        </div>
        <span className="col s6">Rating: {props.rating} (Number of Reviews: {props.review_count})</span>
        <span className="col s3">{props.address}, {props.city}, {props.state}</span>
        <span className="col s3">{props.phone}</span>
        <span className="col s6">{props.description}</span>
      </div>
    </div>
  )
}

export default Destination;

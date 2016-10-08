import React from 'react';

const Destination = props => {

  return(
    <div className="row">
      <h2>{props.name}</h2>
      <img src={props.image_url}></img>
      <span className="col s6">Rating: {props.rating} Number of Reviews: {props.review_count}</span>
      <span className="col s3">{props.address}, {props.city}, {props.state}</span>
      <span className="col s3">{props.phone}</span>
    </div>
  )
}

export default Destination;

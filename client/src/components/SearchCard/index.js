import React from "react";
import { Col, Row } from "../Grid";

const SearchCard = ({ id, title, authors, description, image, link }) => {
  const displayStyle = {
    display: "inline",
  };

  return (
    <div>
      <Row>
        <Col size="md-6">
          <h1>{title}</h1>
          <h2>Written By: {authors.join(", ")}</h2>
        </Col>
        <Col size="md-6">
          <button className="btn btn-primary float-right">Save</button>
          <a href={link} className="btn btn-dark float-right">
            View
          </a>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <img
            src={image}
            alt={title}
            height="200"
            width="200"
            className="float-left mr-3 mb-3"
          />
          <p style={displayStyle}>Description: {description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default SearchCard;

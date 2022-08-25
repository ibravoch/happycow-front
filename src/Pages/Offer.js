import axios from "axios";
import "../styles/Offer.css";
import data from "../assets/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Rating from "../Components/Rating";

const Offer = () => {
  // const { elem } = useParams();
  const location = useLocation();
  const { elem } = location.state;

  return (
    <div className="page">
      <section className="fiche">
        <h2> {elem.name} </h2>
        <Rating />
        <h4>{elem.type}</h4>

        <div className="scroll">
          {elem.pictures.map((item, index) => {
            return (
              <div key={index} className="image">
                <img src={item} />
              </div>
            );
          })}
        </div>
        <p className="absolute">{elem.pictures.length} photos</p>
        <p>{elem.description}</p>
      </section>
      <section className="right">
        <div className="offer-info">
          <FontAwesomeIcon icon="location-pin" />
          <p>{elem.address}</p>
        </div>
        <div className="offer-info">
          {elem.phone && <FontAwesomeIcon icon="phone" />}

          <p>{elem.phone}</p>
        </div>
        <div className="offer-info">
          <FontAwesomeIcon icon="link" />
          <p>{elem.website}</p>
        </div>

        <a href={elem.facebook}>Facebook</a>
      </section>
    </div>
  );
};

export default Offer;

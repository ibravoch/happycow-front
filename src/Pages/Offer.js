import axios from "axios";
import data from "../assets/data.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { placeId } = useParams();
  console.log(data.name);
  return <p>{data.name}</p>;
};

export default Offer;

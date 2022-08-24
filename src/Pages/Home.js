import data from "../assets/data.json";
import { useState } from "react";

import { Link } from "react-router-dom";
import "../styles/Home.css";
import donuts from "../assets/donuts.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [search, setSearch] = useState("");
  const [myIcon, setmyIcon] = useState(<FontAwesomeIcon icon="star" />);

  const icon = <FontAwesomeIcon icon="star" />;
  const icon2 = <FontAwesomeIcon icon="star-half" color="lightgrey" />;

  console.log(icon);

  return (
    <div className="Header">
      <div className="cover">
        <img src={donuts} />
      </div>
      <h1 className="on">Trouvez des restaurants vegan</h1>
      <input
        type="search"
        placeholder="Recherchez par ville/région"
        className="in"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <h2>Vegan Food Near me</h2>
      {data === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <main>
          {data
            .filter((filtre) =>
              filtre.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((elem, index) => {
              return (
                <section key={index} className="map">
                  <Link to={`/offer/${elem.placeId}`}>
                    <img src={elem.thumbnail} />
                  </Link>
                  <h3>{elem.name}</h3>
                  <p>{elem.address}</p>

                  {elem.rating && (
                    <div>
                      {elem.rating === 5 ? (
                        <div className="rating">
                          <span>
                            {icon} {icon} {icon} {icon} {icon}
                          </span>
                          <p>{elem.rating} /5</p>
                        </div>
                      ) : null}
                      {elem.rating === 4.5 ? (
                        <div className="rating">
                          <span>
                            {icon} {icon} {icon} {icon} {icon2}
                          </span>
                          <p> {elem.rating} /5 </p>
                        </div>
                      ) : null}
                      {elem.rating === 4 && (
                        <div className="rating">
                          <span>
                            {icon} {icon} {icon} {icon}
                          </span>
                          <p>{elem.rating} /5 </p>
                        </div>
                      )}
                      {elem.rating === 3 && (
                        <div className="rating">
                          <span>
                            {myIcon} {myIcon} {myIcon}
                          </span>
                          <p>{elem.rating} /5</p>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              );
            })}
        </main>
      )}
    </div>
  );
};
export default Home;

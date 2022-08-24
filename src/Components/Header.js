import { useState } from "react";
import happycow from "../assets/happycow.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Header.css";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  console.log(menu);
  return (
    <header>
      <section className="header">
        <div className="left-header">
          <img src={happycow} />
          <nav className="nav">
            <li>Explore</li>
            <li>Forum</li>
            <li>Blog</li>
            <li>Community</li>
          </nav>
          <div>
            <div className="visible">
              <FontAwesomeIcon
                icon="bars"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </div>
            <nav className="menu">
              {menu && (
                <ul>
                  <li>Explore</li>
                  <li>Forum</li>
                  <li>Blog</li>
                  <li>Community</li>
                  <li>Add Listing</li>
                </ul>
              )}
            </nav>
          </div>
        </div>

        <FontAwesomeIcon
          icon="magnifying-glass"
          onClick={() => {
            setSearch(!search);
          }}
        />

        {search && (
          <section className="search">
            <h1>Search Happycow</h1>
            <FontAwesomeIcon
              icon="xmark"
              onClick={() => {
                setSearch(!search);
              }}
            />

            <ul>
              <li>All</li>
              <li>Cities</li>
              <li>businesses</li>
              <li>Members</li>
              <li>Famous</li>
            </ul>
            <input type="search" placeholder="Faites une recherche" />
          </section>
        )}

        <ol>
          <li className="nav">Add Listing</li>
          <li
            style={{
              backgroundColor: "#7c4ec4",
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            Login/join
          </li>
        </ol>
      </section>
    </header>
  );
};
export default Header;

import happycow from "../assets/happycow.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="happycow-header">
      <img alt="happycow" src={happycow} />
      <nav>
        <section>
          <li>Explore</li>
          <li>Forum</li>
          <li>Blog</li>
          <li>Community</li>
          <li>The App</li>
          <li>Shop</li>
          <li>More</li>
        </section>
      </nav>
      <ul>
        <li>Add Listing</li>
        <li>Login/signIn</li>
      </ul>
    </div>
  );
};

export default Header;

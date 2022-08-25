import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="pagination">
        <section className="top-footer">
          <ul>
            <h3>Commmunity</h3>
            <li>Myprofile</li>
            <li>Ambassadors</li>
            <li>Veg Events</li>
            <li>Forum</li>
            <li>Newsletter</li>
            <li>Our story</li>
            <li>Get involved</li>
          </ul>
        </section>
        <section className="top-footer">
          <ul>
            <h3>About</h3>
            <li>Faq</li>
            <li>Ambassadors</li>
            <li>Contact</li>
            <li>Forum</li>
            <li>Link to us</li>
            <li>Site Map</li>
          </ul>
        </section>
        <section className="top-footer">
          <ul>
            <h3>shop</h3>
            <li>T-shirts</li>
            <li>Books</li>
          </ul>
        </section>
      </div>
      <div className="bottom">
        <ul>
          <li>Privacy Policy</li>
          <li> Terms Of use</li>
          <li> DMCA Compliance</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;

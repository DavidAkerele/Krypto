import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>KRYPTO</h2>
      <div className="krpt">
        <p className="heed">Krypto</p>
        <p>Home</p>
        <p>About</p>
        <p>Buy NFTs</p>
        <p>Sell NFTs</p>
      </div>
      <div className="krpt">
        <p className="heed">Market</p>
        <p>Browse NFTs</p>
        <p>Buy NFTs</p>
        <p>Sell NFTs</p>
      </div>
      <div className="krpt">
        <p className="heed">Contact</p>
        <p>Email</p>
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
      <div className="newsletter">
        <h2>Join Our Newsletter</h2>
        <form className="newsinp" action="">
          <input type="text" placeholder="Email Address" />
          <button className="footer-btn"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;

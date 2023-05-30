import "./Testimonials.css";
import test from "../../assets/test.svg";

const Testimonials = () => {
  return (
    <div className="test-container">
      <p>testimonials</p>
      <h1>read what others have to say</h1>
      <div className="cards">
        <div className="olve">
          <img src={test} alt="" />
          <div className="info">
            <h2>Olivia Cole</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </h3>
          </div>
        </div>
        <div className="olve">
          <img src={test} alt="" />
          <div className="info">
            <h2>Olivia Cole</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </h3>
          </div>
        </div>
        <div className="olve">
          <img src={test} alt="" />
          <div className="info">
            <h2>Olivia Cole</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import "../home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import mango from "../images/mango.png";
import fruits from "../images/fruits.png";
import vegetables from "../images/vegetables.png";
import cookingoil from "../images/cookingoil.png";
import dryfruits from "../images/dryfruits.png";
import ghee from "../images/ghee.png";
const Home = () => {
  return (
    <>
      <main className="flex items-center justify-center">
        <section className="glass flex flex-col lg:flex-row">
          <div className="dashboard">
            <div className="pro m-5 md:m-0">
              <h2 className="py-0 md:py-1">Mangoes</h2>
              <Link to="/product/mangoes">
                <img src={mango} alt="" />
              </Link>
            </div>
            <div className="pro m-5 md:m-0">
              <h2 className="py-0 md:py-1">Fruits</h2>
              <Link to="/product/fruits">
                <img src={fruits} alt="" />
              </Link>
            </div>
            <div className="pro m-5 md:m-0">
              <h2 className="py-0 md:py-1">Vegetables</h2>
              <Link to="/product/vegetables">
                <img src={vegetables} alt="" />
              </Link>
            </div>
          </div>

          <div className="games m-0 mt-5 md:m-5">
            <div className="status">
              <h1 style={{ textAlign: "center" }}>HEALTH ESSENCE</h1>
              <input type="text" />
            </div>
            <div className="cards">
              <div className="card rounded-none md:rounded-full p-0.5 m-0 md:p-2 md:m-2">
                <div className="card-info">
                  <p>
                    Dear All, <br />
                    It gives us an immense pleasure to announce the launch of{" "}
                    <strong style={{ color: "#16c79a" }}>
                      Health Essence
                    </strong>{" "}
                    for
                    <strong className="blink_me"> ALL NATURAL </strong>
                    products’ range for all of us.
                  </p>
                  <p>
                    ‘Mother Nature’ and her elements of ‘Panch Mahabhutas’
                    (Earth, Fire, Water, Air & Space) have showered all love in
                    abundance for human kind. And that without any expectations
                    from us. We are here to help you to save this treasure for
                    us and for our future generations.
                  </p>
                  <p>
                    Please welcome and support our products on our website for
                    betterment of your health. It’s our endeavour to usher these
                    products and let’s go back in the lapse of ‘Mother Nature’.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard">
            <div className="pro m-5 md:m-0">
              <h2 className="py-0 md:py-1">Cooking Oil</h2>
              <Link to="/product/cookingoil">
                <img src={cookingoil} alt="" />
              </Link>
            </div>
            <div className="pro m-5 md:m-0">
              <h2 className="py-0 md:py-1">Dry Fruits</h2>
              <Link to="/product/dryfruits">
                <img src={dryfruits} alt="" />
              </Link>
            </div>
            <div className="pro m-5 md:m-0">
              <h2 className="py-0 md:py-1">Ghee</h2>
              <Link to="/product/ghee">
                <img src={ghee} alt="" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
};

export default Home;

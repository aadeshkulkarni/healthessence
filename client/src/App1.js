import { useEffect, useState } from "react";
import apple from "./images/apple.jpg";
import banana from "./images/banana.jpg";
import anar from "./images/anar.jpg";
import strawberry from "./images/strawberry.jpg";
import chikoo from "./images/chikoo.jpg";
import Carousel from "react-bootstrap/Carousel";
import oil1 from "./images/triveni/oil1.jpeg";
import oil2 from "./images/triveni/oil2.jpeg";
import oil3 from "./images/triveni/oil3.jpeg";
import oil4 from "./images/triveni/oil4.jpeg";
import oil5 from "./images/triveni/oil5.jpeg";
import oil6 from "./images/triveni/oil6.jpeg";
import oil7 from "./images/triveni/oil7.jpeg";
import oil8 from "./images/triveni/oil8.jpeg";
import oil9 from "./images/triveni/oil9.jpeg";
import fruitBasket from "./images/fruitbasket.jpg";
import fruitBasket2 from "./images/fruitbasket2.jpg";
import fruitBasket3 from "./images/fruitbasket3.jpg";
import triveni from "./images/triveni/triveni.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Loader from "./components/Loader";

function App1() {
  const { height, width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  console.log(width);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const mobileCarousel = width < 500 && (
    <Carousel interval={2000}>
      <Carousel.Item>
        <div className="oil-section">
          <img src={triveni} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil1} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil2} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil3} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil4} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil5} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil6} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil7} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil8} alt="oil" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={oil9} alt="oil" />
        </div>
      </Carousel.Item>
    </Carousel>
  );

  const fullscreenCarousel = width > 500 && (
    <>
      <Carousel interval={3000}>
        <Carousel.Item>
          <div className="oil-container">
            <div className="oil-section">
              <img src={oil1} alt="oil" />
              <img src={oil2} alt="oil" />
              <img src={oil3} alt="oil" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="oil-container">
            <div className="oil-section">
              <img src={oil4} alt="oil" />
              <img src={oil5} alt="oil" />
              <img src={oil6} alt="oil" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="oil-container">
            <div className="oil-section">
              <img src={oil7} alt="oil" />
              <img src={oil8} alt="oil" />
              <img src={oil9} alt="oil" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
  const fullscreenCarousel2 = width > 500 && (
    <Carousel interval={2000}>
      <Carousel.Item>
        <div className="oil-container">
          <div className="oil-section">
            <img src={fruitBasket3} />
            <img src={fruitBasket} />
            <img src={fruitBasket2} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
  const mobileCarousel2 = width < 500 && (
    <Carousel interval={2000}>
      <Carousel.Item>
        <div className="oil-section">
          <img src={fruitBasket3} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={fruitBasket} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="oil-section">
          <img src={fruitBasket2} />
        </div>
      </Carousel.Item>
    </Carousel>
  );
  return (
    <div className="App">
      {loading && <Loader />}
      <div className="custom">
        {/* <Logo />  */}
        <h1 className="h1-header">Health Essence</h1>
      </div>
      <div className="triveni">
        {fullscreenCarousel} {mobileCarousel}
      </div>
      <div className="product-container">
        <h2>Fruits Basket</h2>
        <div className="triveni">
          {fullscreenCarousel2} {mobileCarousel2}
        </div>
        <h2>Product Catalog</h2>
        <div className="card-container">
          <div className="card">
            <img src={strawberry} alt="Apple"></img>
            <h3>Strawberries</h3>
          </div>

          <div className="card">
            <img src={banana} alt="Apple"></img>
            <h3>Banana</h3>
          </div>
          <div className="card">
            <img src={apple} alt="Apple"></img>
            <h3>Apple</h3>
          </div>
          <div className="card">
            <img src={chikoo} alt="Apple"></img>
            <h3>Chikoo</h3>
          </div>
          <div className="card">
            <img src={anar} alt="Apple"></img>
            <h3>Pomogranate</h3>
          </div>
          <div className="card">
            <img
              src="https://5.imimg.com/data5/HF/CW/MY-51857835/organic-apple-fruit-500x500.jpg"
              alt="Apple"
            ></img>
            <h3>Apple</h3>
          </div>
        </div>
      </div>
      <footer
        style={{
          margin: "auto",
          fontSize: "1em",
          textAlign: "center",
          background: "#252525",
          color: "#FFF",
          padding: "1em",
        }}
      >
        <p>For more information,</p>
        <p> Contact us @ +91 9152130439</p>
      </footer>
    </div>
  );
}

export default App1;

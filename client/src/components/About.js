import fruitbasket from "../images/fruitbasket.jpg";
const About = () => {
  return (
    <div className="h-full w-full flex justify-center bg-health-essence bg-no-repeat bg-cover bg-opacity-50">
      <div className="w-11/12 md:w-7/12 mt-5 bg-white text-green-800 px-5 rounded-lg shadow-lg bg-opacity-90">
        <h2 className="m-2 border-b-2 border-gray-300 text-green-600 text-2xl">
          Health Essence
        </h2>
        <p className="text-justify text-md">
          Dear All, <br />
          It gives us an immense pleasure to announce the launch of{" "}
          <a href="www.healthessence.in">www.healthessence.in</a> for{" "}
          <span className="text-green-400">“ALL NATURAL”</span> products’ range{" "}
          for all of us.
        </p>
        <br />
        <p className="text-justify text-md">
          ‘Mother Nature’ and her elements of ‘Panch Mahabhutas’ (Earth, Fire,
          Water, Air & Space) have showered all love in abundance for human
          kind. And that without any expectations from us. We are here to help
          you to save this treasure for us and for our future generations.
        </p>
        <br />
        <p className="text-justify  text-md">
          Please welcome and support our products on our website for betterment
          of your health. It’s our endeavour to usher these products and let’s
          go back in the lapse of ‘Mother Nature’.
        </p>
      </div>
    </div>
  );
};
export default About;

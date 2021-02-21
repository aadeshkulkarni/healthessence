import apple from "../images/apple.jpg";
import banana from "../images/banana.jpg";
import anar from "../images/anar.jpg";
import strawberry from "../images/strawberry.jpg";
import chikoo from "../images/chikoo.jpg";
import { useQuery, gql } from "@apollo/client";

const product_query = gql`
  {
    products(filter: "Fruits") {
      productName
      productURL
      productQty
      category
    }
  }
`;

const ProductList = () => {
  // const products = [
  //   {
  //     Fruits: [
  //       {
  //         productName: "Apple",
  //         productURL: apple,
  //         productQty: "500 gms",
  //       },
  //       {
  //         productName: "Banana",
  //         productURL: banana,
  //         productQty: "1 dozen",
  //       },
  //       {
  //         productName: "Anar",
  //         productURL: anar,
  //         productQty: "500 gms",
  //       },
  //       {
  //         productName: "Strawberries",
  //         productURL: strawberry,
  //         productQty: "1 dozen",
  //       },
  //       {
  //         productName: "Chikoo",
  //         productURL: chikoo,
  //         productQty: "500 gms",
  //       },
  //     ],
  //   },
  //   {
  //     Oils: [
  //       {
  //         productName: "Apple",
  //         productURL: apple,
  //         productQty: "500 gms",
  //       },
  //       {
  //         productName: "Banana",
  //         productURL: banana,
  //         productQty: "1 dozen",
  //       },
  //       {
  //         productName: "Anar",
  //         productURL: anar,
  //         productQty: "500 gms",
  //       },
  //       {
  //         productName: "Strawberries",
  //         productURL: strawberry,
  //         productQty: "1 dozen",
  //       },
  //       {
  //         productName: "Chikoo",
  //         productURL: chikoo,
  //         productQty: "500 gms",
  //       },
  //     ],
  //   },
  //   {
  //     Jaggery: [
  //       {
  //         productName: "Apple",
  //         productURL: apple,
  //         productQty: "500 gms",
  //       },
  //       {
  //         productName: "Banana",
  //         productURL: banana,
  //         productQty: "1 dozen",
  //       },
  //       {
  //         productName: "Anar",
  //         productURL: anar,
  //         productQty: "500 gms",
  //       },
  //       {
  //         productName: "Strawberries",
  //         productURL: strawberry,
  //         productQty: "1 dozen",
  //       },
  //       {
  //         productName: "Chikoo",
  //         productURL: chikoo,
  //         productQty: "500 gms",
  //       },
  //     ],
  //   },
  // ];
  const { data } = useQuery(product_query);
  const products = data.products;
  return (
    <div>
      <h4 className="font-bold mt-2 md:mt-5 pb-2 border-b border-gray-200">
        Category goes here
      </h4>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10">
        {/* <!-- cards go here --> */}
        {products &&
          products.map((product) => (
            <div className="card hover:shadow-lg transform hover:scale-105 transition ease-out duration-500">
              <img
                src={product.productURL}
                alt="stew"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">{product.productName}</span>
                <span className="block text-gray-500 text-sm">
                  {product.productQty}
                </span>
              </div>
              <div class="badge">
                <span className="text-xs">
                  <svg
                    className="w-2 lg:w-4 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>{" "}
                  7 days
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;

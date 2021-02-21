import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
const CREATE_PRODUCT_MUTATION = gql`
  mutation addProduct(
    $productName: String!
    $productURL: String!
    $productQty: String!
    $category: String!
  ) {
    addProduct(
      productName: $productName
      productURL: $productURL
      productQty: $productQty
      category: $category
    ) {
      productName
      productURL
      productQty
      category
    }
  }
`;

const Admin = () => {
  const [product, setProduct] = useState({
    productName: "",
    productQty: "",
    category: "",
    productURL: "",
  });

  const [createProduct] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: {
      productName: product.productName,
      productURL: product.productURL,
      productQty: product.productQty,
      category: product.category,
      postedById: 1,
    },
  });

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onAddBtnClick = (e) => {
    e.preventDefault();
    /* Mutation Call with products object*/
    createProduct();
  };

  return (
    <>
      <main className="h-full flex justify-center items-center">
        <section className="glass flex flex-col lg:flex-row">
          <div className="dashboard flex-1">
            <div className="user">
              <img src="./images/avatar.png" alt="" />
              <h3>Simo Edwin</h3>
              <p>Pro Member</p>
            </div>
            <div className="pro">
              <h2>Manage Products</h2>
            </div>
            <div className="pro">
              <h2>Manage Categories</h2>
            </div>
            <div className="pro">
              <h2>Manage Write-ups</h2>
            </div>
          </div>
          <div className="games flex-3">
            <div className="status">
              <h1>New Product</h1>
            </div>
            <div className="main-body">
              <input
                type="text"
                placeholder="Product Name"
                name="productName"
                onChange={(e) => onChange(e)}
              />
              <input
                type="text"
                placeholder="Product Quantity"
                name="productQty"
                onChange={(e) => onChange(e)}
              />
              <select name="category" onChange={(e) => onChange(e)}>
                <option>Category</option>
                <option value="Mangoes">Mangoes</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dry Fruits">Dry Fruits</option>
                <option value="Cooking Oil">Cooking Oil</option>
                <option value="Ghee">Ghee</option>
              </select>
              <input type="file" placeholder="Product Image" />
              <button onClick={(e) => onAddBtnClick(e)}>Add Product</button>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
};

export default Admin;

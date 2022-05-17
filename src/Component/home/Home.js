import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://13.235.87.215:4000";

function Home() {
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    const data = {
      token: localStorage.getItem("token"),
    };
    axios
      .post(BASE_URL + "/api/v1/category/all", data)
      .then(function (response) {
        if (response.data.success) {
          setcategoryList(response.data.categories);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div id="homePage">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="home-title text-center">Welcome to E-commerce</h2>
            <div className="categoty-list d-flex flex-row justify-content-center align-item-center">
              <div className="category-item rounded-3 d-flex justify-content-center align-item-center">
                <Link to={"/products"}>All Products</Link>
              </div>
              {categoryList.map((category) => (
                <div
                  key={category.categoryId}
                  className="category-item rounded-3 d-flex justify-content-center align-item-center"
                >
                  <p>{category.name}</p>
                </div>
              ))}
            </div>

            <div className="category-title text-center">
              select a category to start a shopping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

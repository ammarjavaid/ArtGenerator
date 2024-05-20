import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data, data2, data3 } from "../data";
import useWindowSize from "../CustomHook/useWindowSize";
import axios from "axios";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Realistic");
  const [apiData, setApiData] = useState(null);

  const handleClick = (type) => {
    setActiveTab(type);
  };

  const { width } = useWindowSize();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setApiData(response.data);
        console.log(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <h1> AI Art Generator </h1>
            <p>
              Create awe-inspiring masterpieces effortlessly and explore the
              endless possibilities of AI generated art. Enter a prompt, and
              choose a style, AI art generator bring your ideas to life!
            </p>
            <div className="input-group">
              <input type="text" placeholder="Enter prompt here" />
              <Link to="/generate"> Generate </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="inspiration">
        <div className="container">
          <h2> Inspirations </h2>
          <div className="btns-group">
            <button
              onClick={() => handleClick("Realistic")}
              className={activeTab === "Realistic" ? "active" : ""}
            >
              Realistic
            </button>
            <button
              onClick={() => handleClick("Science Fiction")}
              className={activeTab === "Science Fiction" ? "active" : ""}
            >
              Science Fiction
            </button>
            <button
              onClick={() => handleClick("Cartoon")}
              className={activeTab === "Cartoon" ? "active" : ""}
            >
              Cartoon
            </button>
            <button
              onClick={() => handleClick("Anime")}
              className={activeTab === "Anime" ? "active" : ""}
            >
              Anime
            </button>
            <button
              onClick={() => handleClick("Oil Painting")}
              className={activeTab === "Oil Painting" ? "active" : ""}
            >
              Oil Painting
            </button>
            <button
              onClick={() => handleClick("Landscape")}
              className={activeTab === "Landscape" ? "active" : ""}
            >
              Landscape
            </button>
          </div>

          <div className="card-lists">
            {activeTab === "Realistic" &&
              data.map((el, index) => (
                <div className="card-content" key={index}>
                  <img src={el.img} alt="" />
                  <p>{el.title}</p>
                </div>
              ))}
            {activeTab === "Science Fiction" &&
              data2.map((el, index) => (
                <div className="card-content" key={index}>
                  <img src={el.img} alt="" />
                  <p>{el.title}</p>
                </div>
              ))}
            {activeTab === "Cartoon" &&
              data3.map((el, index) => (
                <div className="card-content" key={index}>
                  <img src={el.img} alt="" />
                  <p>{el.title}</p>
                </div>
              ))}
            {activeTab === "Anime" &&
              data.map((el, index) => (
                <div className="card-content" key={index}>
                  <img src={el.img} alt="" />
                  <p>{el.title}</p>
                </div>
              ))}
            {activeTab === "Oil Painting" &&
              data3.map((el, index) => (
                <div className="card-content" key={index}>
                  <img src={el.img} alt="" />
                  <p>{el.title}</p>
                </div>
              ))}
            {activeTab === "Landscape" &&
              data.map((el, index) => (
                <div className="card-content" key={index}>
                  <img src={el.img} alt="" />
                  <p>{el.title}</p>
                </div>
              ))}
          </div>

          {/* for all data show when on mobile screens */}

          {width < 968 && (
            <>
              {data.map((el, index) => (
                <div className="card-content" key={index}>
                  <img src={el.img} alt="" />
                  <p>{el.title}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

import { Col, Row } from "antd";
import React from "react";
import { aspectRatio, myCreations } from "../data";
import Mid from "../assets/images/mid.png";
import { Input } from "antd";
import Model from "../assets/images/2.png";
import One from "../assets/images/1.png";
import Two from "../assets/images/2.png";
import Three from "../assets/images/3.png";
import Four from "../assets/images/4.png";
import Five from "../assets/images/5.png";
import Six from "../assets/images/6.png";
import Seven from "../assets/images/7.png";
import Eight from "../assets/images/8.png";
import Nine from "../assets/images/9.png";
import { useMediaQuery } from "react-responsive";

const GenerateImage = () => {
  const { TextArea } = Input;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <Row gutter={20} className="generateImages">
        <Col span={4} className="left-section">
          <h3> My Creations </h3>
          <Row gutter={[10, 10]}>
            <hr />
            {myCreations.map((el) => (
              <Col span={12}>
                <img src={el.img} alt="" />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12} className="mid">
          <img src={Mid} alt="" />
        </Col>
        <Col span={isTabletOrMobile ? 24 : 8} className="right-section">
          <TextArea rows={4} className="textarea" />
          <p className="settings">Additional settings</p>
          <hr />

          <h3> Aspect Ratio </h3>
          <div className="social-imgs">
            {aspectRatio.map((el) => (
              <div className="icon active">
                <div className="media-icon">
                  <h6> {el.icon} </h6>
                  <p>{el.diminsion}</p>
                </div>
                <h5>{el.title}</h5>
              </div>
            ))}
          </div>

          <hr />

          <h3> Models & Styles </h3>
          <div className="model-cards">
            <div className="model">
              <div className="model-left">
                <p>Model</p>
                <h5>Realistic</h5>
              </div>
              <div className="model-right">
                <img src={Model} alt="" />
              </div>
            </div>
            <div className="style">
              <div className="style-left">
                <p>Style</p>
                <h5>Disney</h5>
              </div>
              <div className="style-right">
                <img src={One} alt="" />
              </div>
            </div>
          </div>

          <div className="imgs">
            <div className="img">
              <img src={One} alt="" />
              <p> ICON </p>
            </div>
            <div className="img">
              <img src={Two} alt="" />
              <p> RENDER </p>
            </div>
            <div className="img">
              <img src={Three} alt="" />
              <p> Line Art </p>
            </div>
            <div className="img">
              <img src={Four} alt="" />
              <p> Pixel Art </p>
            </div>
            <div className="img">
              <img src={Five} alt="" />
              <p> Anemi </p>
            </div>
            <div className="img">
              <img src={Six} alt="" />
              <p> Render </p>
            </div>
            <div className="img">
              <img src={Seven} alt="" />
              <p> Cartoon </p>
            </div>
            <div className="img">
              <img src={Eight} alt="" />
              <p> Anemi </p>
            </div>
            <div className="img">
              <img src={Nine} alt="" />
              <p> Imagin V8 </p>
            </div>
          </div>

          <div className="generate-btn">
            <button> Generate </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default GenerateImage;

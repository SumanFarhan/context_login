import React from "react";
import { Carousel } from "antd";
import Lottie from "lottie-react";
import login from "./Images/107385-login.json";
import fileDetection from "./Images/108978-documents-scanning-finding-searching.json";
import Dashboard from "./Images/Dashboard.json"
import Analytics from "./Images/analytics.json"

const contentStyle = {
  height: "160px",
  color: "#fff",
  textAlign: "center",
};

const sliderData = [
  {
    img: login,
    heading: "Context",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt consectetur facili delenit deserunt ex natus.`,
  },
  {
    img: Dashboard,
    heading: "HEADING 2",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt consectetur facili delenit deserunt ex natus.`,
  },
  {
    img: fileDetection,
    heading: "HEADING 3",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt consectetur facili delenit deserunt ex natus.`,
  },
  {
    img: Analytics,
    heading: "HEADING 4",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt consectetur facili delenit deserunt ex natus.`,
  },
];

console.log(sliderData.map((v) => v));
const Slider = () => {
  return (
    <>
      <Carousel autoplay>
        {sliderData?.map((v, i) => {
          return (
            <div style={{}} key={i}>
              <Lottie
                animationData={v?.img}
                loop={true}
                className="img_carousel"
              />
              <div style={contentStyle}>
                <h3>{v?.heading}</h3>
                <p className="carousel_Paragraph">{v?.des}</p>
              </div>
            </div>
          );
        })}
      </Carousel>

      {/* <Carousel autoplay>
        <div>
          <Lottie animationData={login} loop={true} className="img_carousel" />
          <div style={contentStyle}>
            <h3>Context</h3>
            <p className="carousel_Paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              incidunt consectetur facili delenit deserunt ex natus.
            </p>
          </div>
        </div>
        <div>
          <Lottie animationData={login2} loop={true} className="img_carousel" />
          <div style={contentStyle}>
            <h3>Context</h3>
            <p className="carousel_Paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              incidunt consectetur facili delenit deserunt ex natus.
            </p>
          </div>
        </div>
        <div>
          <Lottie
            animationData={fileDetection}
            loop={true}
            className="img_carousel"
          />
          <div style={contentStyle}>
            <h3>Context</h3>
            <p className="carousel_Paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              incidunt consectetur facili delenit deserunt ex natus.
            </p>
          </div>
        </div>
        <div>
          <Lottie
            animationData={faceDetection}
            loop={true}
            className="img_carousel"
          />
          <div style={contentStyle}>
            <h3>Context</h3>
            <p className="carousel_Paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              incidunt consectetur facili delenit deserunt ex natus.
            </p>
          </div>
        </div>
      </Carousel> */}
    </>
  );
};

export default Slider;

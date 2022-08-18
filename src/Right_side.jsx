import React from "react";
import { Button } from "antd";
import Svg from "./Svg";
import Input from "./Input";
import logo from "./Images/logo.png";

const Right_side = () => {
  return (
    <>
      <div className="main_right">
        <div className="Up_side">
          <div className="Logo_text">
            <img className="context-logo" src={logo} />
            {/* <h1 style={{lineHeight:'1em'}}>Hello Again!!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p> */}
          </div>
        </div>
        <div className="Down_side">
          <div className="inputField">
            <Input />
            <a  className="forgot_Password" href="">Forgot Password</a>
          </div>
          
          <div className="Buttons">
            <Button type="primary" className="login_btn">
              Login
            </Button>
            <Button type="primary" className="Google_btn">
              <Svg/>
              <span style={{marginLeft:"1em"}}>Signin with Google</span>
            </Button>
          </div>
          <div className="Account">
            <span>
              Don't have an account yet?<a href="">Signup</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right_side;

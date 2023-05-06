/* eslint-disable jsx-quotes */
// import React from "react";
import { Image } from "@tarojs/components";
import "./login.scss";

const Login = () => {
  return (
    <view className="container_login">
      <Image
        className="LogoImage"
        src={require("../../static/login/logo.png")}
      ></Image>
      <view className="Hello text">您好！</view>
      <view className="Title text">太多石数字化打样系统</view>
    </view>
  );
};

export default Login;

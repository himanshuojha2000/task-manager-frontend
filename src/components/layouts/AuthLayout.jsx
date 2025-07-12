import React from "react";
import UI_IMG from "../../assets/images/auth-img.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Taskkkk Manager</h2>
        {children}
      </div>

      <div
        className="flex md:flex w-full md:w-[40vw] h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-img.jpg')" }}
      ></div>
    </div>
  );
};

export default AuthLayout;

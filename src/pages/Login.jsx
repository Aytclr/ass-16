import React from "react";

const Login = () => {
  return (
    <div className="loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex flex-col justify-center text-center" >
      <div className="flex justify-center items-center mt-2 gap-2">
        <span className="w-[6px] h-[39px] bg-yellow-200"  ></span>
        <h1 className="text-[22px] sm:-[32px] font-montserrat font-700 uppercase  ">
          Clarus Store
        </h1>
      </div>
      <div className="my-2">
        <h3 className="font-montserrat font-600 text-[22px]">SING IN</h3>
        <h6 className="font-montserrat text-labelColor texy-label mt-1">Enter your credetentials to access your account</h6>
      </div>
      </div>
    </div>
  );
};

export default Login;

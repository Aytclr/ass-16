import React, { useContext, useState } from "react";
import { AuthContex } from "../context/AuthProvider";

const Login = () => {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const {login} = useContext(AuthContex)


  const handleSubmit=(e)=>{
    e.preventDefault()
    if (email.toLocaleLowerCase()=== "admin@aa.com" && pass === "admin") {
      // console.log({email,pass});  
      login({email,pass});
    }else{
      alert("Hatalı giriş")}



    console.log({email,pass});
  }
  




  return (
    <div className="loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex flex-col justify-center text-center">
        <div className="flex justify-center items-center mt-2 gap-2">
          <span className="w-[6px] h-[39px] bg-yellow-200"></span>
          <h1 className="text-[22px] sm:-[32px] font-montserrat font-700 uppercase  ">
            Clarus Store
          </h1>
        </div>
        <div className="my-2">
          <h3 className="font-montserrat font-600 text-[22px]">SING IN</h3>
          <h6 className="font-montserrat text-labelColor texy-label mt-1">
            Enter your credetentials to access your account
          </h6>
        </div>
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col text-left p-3 gp-5 ">
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:after:content-['admin@aa.com'] hover:after:text-black hover:after pl-3  hover:after: underline hover:after:cursor-pointer "
              htmlFor=""
            >
              Email
            </label>

            <input
              className="login-input"
              type="Email"
              id="Email"
              placeholder="Enter your Email"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:after:content-['admin'] hover:after:text-black hover:after pl-3  hover:after: underline hover:after:cursor-pointer "
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="login-input"
              type="Password"
              id="Password"
              placeholder="Enter your Password"
              required
              onChange={(e)=>setPass(e.target.value)}
            />
          </div>
          <button className=" mt-3 bg-main h-[44px] font-montserrat text-label text-white uppercase hover:opacity-90 rounded-[4px]">Sing In</button>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <span className="text-label font-montserrat font-[400]
          text-labelColor">Forgot your password</span>
          <span className="text-main font-montserrat font-[400]
          text-late-800 underline ">Reset Password</span>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;

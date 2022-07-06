import React from "react";
import { Link } from "react-router-dom";
import CustomInputs from "../../Components/Inputs/CustomInputs";
import "./SignUp.css";
export default function SignUp() {
  return (
    <div className="SignUp-Container">
      <div className="SignUp-Block">
        <div className="SignUp-Block-Image">
          <img src="/images/SignUp-image.png" alt="" />
          <h3 className="section-title2">Register Now!</h3>
        </div>
        <div className="SignUp-Block-inputs">
          <div className="SignUp-Inputs-Col">
            <h3 className="section-title2">Welcome!</h3>
            <CustomInputs
              label="User Id"
              name="Name"
              placeholder="John Doe"
              width={100}
              type="text"
            />
            <CustomInputs
              label="Enter Email Id"
              name="Email"
              placeholder="JohnDoe@gmail.com"
              width={100}
              type="email"
            />
            <CustomInputs
              label="Enter Mobile No"
              name="Email"
              placeholder="+91-7xxx1-xxxx4"
              width={100}
              type="email"
            />
            <CustomInputs
              label="Enter Password"
              name="password"
              placeholder="*******"
              width={100}
              type="password"
            />
            <CustomInputs
              label="Enter Confirm Password"
              name="password"
              placeholder="*******"
              width={100}
              type="password"
            />
            <div className="SignUp-Login-btn">
              <button className="SignUp-L-Button">Register</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Start-Investing-Container">
        <div className="Investing-Card">
          <img src="/images/CA-image.png" alt="" />
          <h4>Create an Account</h4>
        </div>
        <div className="Investing-Card">
          <img src="/images/FYA-image.png" alt="" />
          <h4>Fund Your Account</h4>
        </div>
        <div className="Investing-Card">
          <img src="/images/IC-image.png" alt="" />
          <h4>Invest Conveniently</h4>
        </div>
      </div>
      <div className="Documents-Col">
        <h3>
          Please ensure to keep following documents ready before proceeding
        </h3>
        <div className="Documents-Row">
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Pan card</label>
          </div>
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Aadhar card</label>
          </div>
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Cheque</label>
          </div>
        </div>
        <div className="Documents-Row">
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Bank Statement</label>
          </div>
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Photograph</label>
          </div>
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Signature Scan</label>
          </div>
        </div>
      </div>
    </div>
  );
}

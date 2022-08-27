import React from "react";
import { Button, Checkbox, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "../Styles.css";
import { useEffect } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // fetch(
    //   "https://www.interntheory.com/api/internships/internships-in-delhi?page=1&size=10",
    //   { method:"GET",mode: "cors" }
    // ).then((response) => response.json()).then((result) => console.log(result)).catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-signup-form-box">
          <h1>Register Candidate</h1>
          <p className="ifAlreadyRegistered">
            Already have an account? <span className="link" onClick={()=>navigate("/login/student")}>Sign In</span>
          </p>
          <p className="note">
            If you are a company looking to hire interns, please register as a
            company by clicking <span className="link">here</span>.
          </p>
          <div className="signin-fb" style={{ background: "#4267B2" }}>
            <button
              style={{
                background: "white",
                borderRadius: "0.25rem",
                padding: "5px",
              }}
            >
              <BsFacebook size="28px" color="#4267B2" />
            </button>
            <h1>REGISTER WITH FACEBOOK</h1>
            <h1>{null}</h1>
            <h1>{null}</h1>
          </div>
          <div className="signin-google" style={{ background: "#087CDD" }}>
            <button
              style={{
                background: "white",
                borderRadius: "0.25rem",
                padding: "5px",
              }}
            >
              <FcGoogle size="28px" />
            </button>
            <h1>REGISTER WITH GOOGLE</h1>
            <h1>{null}</h1>
            <h1>{null}</h1>
          </div>

          <span style={{ color: "grey", fontSize: "15px" }}>OR</span>
          <Input placeholder="Enter Email" className="email" />
          <Input placeholder="Password" className="password" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "13px",
              margin: "5px auto",
            }}
          >
            <Checkbox size="sm">
              <p style={{ fontSize: "13px" }}>Remember Me</p>
            </Checkbox>
            <p className="link">Forgot Password?</p>
          </div>
          <p style={{ fontSize: "12px" }}>
            Don't have an account?{" "}
            <span className="link">Create your account</span>
          </p>
          <Button className="login-btn" variant="white">
            LOGIN
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

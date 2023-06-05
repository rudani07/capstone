import React, { useState } from "react";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        toast.success(
          `email is successfully sent to ${email}. click the link to complete your registration.`
        );
        window.localStorage.setItem("emailForSignIn", email);
        setEmail("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
       <input type="email" name='email' className='form-control' placeholder="Enter your email address " value={email} onChange={(e)=> setEmail(e.target.value)} autoFocus />
    <br/><br/>
    <div className="col-md-12 text-center">
            <button type='submit' className="btn btn-primary">Submit</button>
    </div>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4 className="text-center">Register</h4>
          
          <ToastContainer />
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;

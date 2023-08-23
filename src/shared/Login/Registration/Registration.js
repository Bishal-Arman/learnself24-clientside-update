import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
const Registration = () => {
  useTitle("Signup");
  const { handleEmailPassSignIn, handleUpdateProfile, varifyEmail } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
    }
    // console.log(name, email, password);
    form.reset();
    handleEmailPassSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUserProfile(name);
        handleVarifyEmail();
        toast(
          "Please check your email in inbox or spam folder and verify it..!",
          {
            icon: "👏",
          }
        );
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    handleUpdateProfile(profile)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const handleVarifyEmail = () => {
    varifyEmail();
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="login">
      <h3
        className="text-center px-0 my-3 text-success"
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        ---Please Registration Here---
      </h3>
      <Container>
        <form
          className="login-form border border-light-subtle px-3 py-3 bd"
          onSubmit={handleRegistration}
        >
          <div className="form-group  py-3">
            <label htmlFor="exampleInputText">Enter your name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputText"
              placeholder="Enter your name"
              required
            />
          </div>{" "}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter your email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              required
            />
          </div>{" "}
          <div className="form-group pt-3">
            <label htmlFor="exampleInputPassword1">Enter Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-check py-3">
            <input
              onClick={handleAccepted}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label text-primary "
              htmlFor="exampleCheck1"
            >
              Click here for confirmation
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!accepted}
          >
            SignUp
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Registration;

import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { handleGoogleSignIn, handleEmailPasslogin, setLoading } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    handleGoogleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          navigate(from, { replace: true });
        }
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const password = form.password.value;
    handleEmailPasslogin(name, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast(
            "Please check your email in inbox or spam folder and verify it..!",
            {
              icon: "👏",
            }
          );
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
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
        ---Please Login---
      </h3>
      <Container>
        <form
          className="login-form border border-light-subtle px-3 py-3 bd"
          onSubmit={handleSignIn}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="name"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
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
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>{" "}
          <br /> <br />
          <div className="btn-google">
            <Button variant="outline-primary" onClick={handleGoogle}>
              Sign-in-With<FaGoogle className="google-icon"></FaGoogle>
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;

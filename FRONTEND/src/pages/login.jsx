import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const Login = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("before login: ", user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json(); // Read the response body as JSON
      console.log(`response from server ${res_data.message} and ${res_data.extraDetails}`);

      if (response.ok) {
        console.log("after login: ", res_data);
        // toast.success("Login Successful");
        storeTokenInLS(res_data.token);
        alert("login Successful");
        navigate("/");
      } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="login">
        <div className="login-img">
          <img src="./images/login-1.jpeg" alt="Picture of Login" />
        </div>
        <div className="login-container">
          <h1>
            log <span>in</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              required
              name="email"
              value={user.email}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Your Password"
              required
              name="password"
              value={user.password}
              onChange={handleInput}
            />
            <button type="submit">login</button>
          </form>
        </div>
      </section>
    </>
  );
};

import "./signup.css";
import { useState } from "react";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

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
    console.log("User data being submitted:", user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("Full response object:", response);

      const res_data = await response.json();
      console.log("Parsed response JSON:", res_data);

      if (response.ok) {
        console.log("Signup successful, response data:", res_data);
        storeTokenInLS(res_data.token);
        alert("Registration Successful");
        navigate("/");
      } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("Error inside response:", res_data);
      }
    } catch (error) {
      console.log("Error during fetch operation:", error);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="signup-img">
          <img src="./images/signup.jpeg" alt="Picture for Sign Up" />
        </div>
        <div className="signup-container">
          <h1>
            sign <span>up</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              name="username"
              value={user.username}
              onChange={handleInput}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              name="email"
              value={user.email}
              onChange={handleInput}
            />
            <input
              type="number"
              placeholder="Your Phone Number"
              required
              name="phone"
              value={user.phone}
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </section>
    </>
  );
};

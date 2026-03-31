import "./contact-me.css";
import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const ContactMe = () => {
  const { user } = useAuth();
  console.log("user is ", user);
  const [data, setData] = useState(defaultContactFormData);

  useEffect(() => {
    // Adjust this line to access the user data correctly
    if (user && user.userData) {
      setData({
        username: user.userData.username || "", // Adjust to access userData
        email: user.userData.email || "",       // Adjust to access userData
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setData(defaultContactFormData);
        const responseData = await response.json();
        alert(responseData.message);
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="contact-me">
      <div className="contact-container">
        <h1>
          contact <span>me</span>
        </h1>
        <p>
          Hi There{user && user.userData.username ? ` ${user.userData.username}` : ""}! I am available for Freelance work, contact me via email:
          hk5584748@gmail.com
        </p>
        <form onSubmit={handleContactForm}>
          <input
            type="text"
            placeholder="Your Name"
            required
            name="username"
            value={data.username}
            onChange={handleInput}
            autoCapitalize="off"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            value={data.email}
            onChange={handleInput}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            value={data.message}
            onChange={handleInput}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-img">
        <img src="./images/contactme.png" alt="Contact Me" />
      </div>
    </section>
  );
};

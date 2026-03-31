import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const AdminContactUpdate = () => {
  const params = useParams();
  const { authorizationToken } = useAuth(); // Assuming this returns the full "Bearer <token>"
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const getSingleContactData = async () => {
    try {
      const token = authorizationToken.replace("Bearer ", "");

      const response = await fetch(`http://localhost:5000/api/admin/contacts/${params.id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // Ensure Bearer is added here
        },
      });

      if (response.ok) {
        const contactData = await response.json();
        setData(contactData);
        console.log("Fetched contact data:", contactData);
      } else {
        console.error("Unable to fetch contact data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  useEffect(() => {
    getSingleContactData();
  }, [params.id, authorizationToken]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = authorizationToken.replace("Bearer ", "");

      const response = await fetch(`http://localhost:5000/api/admin/contacts/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Ensure Bearer is added here
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Contact data updated successfully");
        // Optionally reset form or redirect here
      } else {
        const errorText = await response.text(); // Get the response text for more details
        console.error("Contact data not updated successfully:", errorText);
      }
    } catch (error) {
      console.error("Error updating contact data:", error);
    }
  };

  return (
    <>
      <h1>Admin Contact Update</h1>
      <section>
        <form onSubmit={handleSubmit}>
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
          <input
            type="text"
            placeholder="Your Message"
            required
            name="message"
            value={data.message}
            onChange={handleInput}
          />
          <button type="submit">Update</button>
        </form>
      </section>
    </>
  );
};

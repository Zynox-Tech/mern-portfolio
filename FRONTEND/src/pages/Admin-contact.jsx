import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import {Link} from "react-router-dom";

export const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken } = useAuth(); // Get authorizationToken from AuthContext

  const getAllContactData = async () => {
    try {
      console.log("Current token:", authorizationToken); // Use authorizationToken here
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          "Authorization": authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        console.error("Failed to fetch user data", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Unable to get data", error);
    }
  };

  useEffect(() => {
    getAllContactData();
  }, [authorizationToken]); // Make sure useEffect runs when authorizationToken changes

  const deleteUser= async(id)=>{
    try {
      const response= await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Authorization": authorizationToken,
        },
      });
      const data= await response.json();
      if(response.ok){
        getAllContactData();
        console.log("User deleted successfully",data);
      }
  
    }
    catch (error) {
      console.error("Unable to Delate ",error);
      
    }
      
    } 

  return (
    <>
      <section>
        <div>
          <h1>Admin Panel</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(contacts) && contacts.map((CurUser, index) => (
                <tr key={index}>
                  <td>{CurUser.username}</td>
                  <td>{CurUser.email}</td>
                  <td>{CurUser.message}</td>
                  <td>  <Link to={`/admin/contacts/${CurUser._id}/edit`}>Edit</Link>  </td>
                  <td><button onClick={()=>deleteUser(CurUser._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

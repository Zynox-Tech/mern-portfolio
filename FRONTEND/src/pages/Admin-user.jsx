import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import {Link} from "react-router-dom";

export const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth(); // Get authorizationToken from AuthContext

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          "Authorization": authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch user data", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Unable to get data", error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, [authorizationToken]); // Make sure useEffect runs when authorizationToken changes
  const deleteUser= async(id)=>{
    try {
      const response= await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Authorization": authorizationToken,
        },
      });
      const data= await response.json();
      if(response.ok){
        getAllUserData();
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
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.map((CurUser, index) => (
                <tr key={index}>
                  <td>{CurUser.username}</td>
                  <td>{CurUser.email}</td>
                  <td>{CurUser.phone}</td>
                  <td> <Link  to={`/admin/users/${CurUser._id}/edit`}>Edit</Link> </td>
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

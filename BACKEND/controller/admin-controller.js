const User = require("../models/user-models");
const Contact = require("../models/contact-model");

const getAlluser = async (req, res, next) => {  // Include 'next' as a parameter
  try {
    const user = await User.find({}, { password: 0 });
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);  
  }
};

const getAllcontact = async (req, res, next) => {
    try {
      const contacts = await Contact.find();
      if (!contacts || contacts.length === 0) {
        return res.status(404).json({ message: "No contact found" });
      }
      return res.status(200).json(contacts);
    } catch (error) {
      next(error);  
    }
  };

  /*   delete user */
  const deleteUserbyID = async (req, res, next) => {
    try {
      const id =req.params.id;
     await User.deleteOne({ _id: id });
     
        return res.status(200).json({ message: "User Deleted Sucessfully" });
      
      
    } catch (error) {
      next(error);
    }
  }
  /*   delete contact */

  const deleteContactbyID = async (req, res, next) => {
    try {
      const id =req.params.id;
     await Contact.deleteOne({ _id: id });
     
        return res.status(200).json({ message: "User Deleted Sucessfully" });
      
      
    } catch (error) {
      next(error);
    }
  }

  /*  get update user */
  const getUserbyID= async (req, res, next) => {
    try {
      const id =req.params.id;
     const data = await User.findOne({_id: id },{password:0});
     return res.status(200).json(data); 
    } catch (error) {
      next(error);
    }
  }

    /*   get update contact */
    const getContactbyID= async (req, res, next) => {
      try {
        const id =req.params.id;
       const data = await Contact.findOne({ _id: id });
       return res.status(200).json(data); 
      } catch (error) {
        next(error);
      }
    }

    
    


    /*   get update contact */

    const updateContactbyID = async (req, res, next) => {
      try {
        const id = req.params.id;
        const updatedContactdata = req.body; 
        if (!updatedContactdata || Object.keys(updatedContactdata).length === 0) {
          return res.status(400).send('Invalid data');
        }
    
        const result = await Contact.updateOne({ _id: id }, { $set:updatedContactdata });
    
        if (result.modifiedCount === 0) {
          return res.status(404).send('User not found or no changes made');
        }
    
        return res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    };


      /*  get update user */
      const updateUserbyID = async (req, res, next) => {
        try {
          const id = req.params.id;
          const updatedUserdata = req.body; 
          if (!updatedUserdata || Object.keys(updatedUserdata).length === 0) {
            return res.status(400).send('Invalid data');
          }
      
          const result = await User.updateOne({ _id: id }, { $set: updatedUserdata });
      
          if (result.modifiedCount === 0) {
            return res.status(404).send('User not found or no changes made');
          }
      
          return res.status(200).json(result);
        } catch (error) {
          next(error);
        }
      };
      
  
module.exports = {getAlluser,getAllcontact,deleteUserbyID,deleteContactbyID,getUserbyID,getContactbyID,updateUserbyID,updateContactbyID};

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware=require("../middleware/admin-middleware");
const { getAlluser, getAllcontact,deleteUserbyID,deleteContactbyID,getUserbyID,getContactbyID,updateUserbyID,updateContactbyID } = require("../controller/admin-controller");


router.route("/users").get(authMiddleware,adminMiddleware,getAlluser);
router.route("/contacts").get(authMiddleware,adminMiddleware,getAllcontact);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,deleteUserbyID);
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,deleteContactbyID);

router.route("/users/:id").get(authMiddleware,adminMiddleware,getUserbyID);
router.route("/contacts/:id").get(authMiddleware,adminMiddleware,getContactbyID);

router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,updateUserbyID);
router.route("/contacts/update/:id").patch(authMiddleware,adminMiddleware,updateContactbyID);

module.exports = router;

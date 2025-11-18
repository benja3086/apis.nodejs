const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.cotroller");

router.get("/", UserController.GetMenu);
router.get("/:id", UserController.GetMenuById);
router.post("/", UserController.PostMenu);
router.put("/", UserController.PutMenu);
router.delete("/:id", UserController.DeleteMenu);

module.exports = router;

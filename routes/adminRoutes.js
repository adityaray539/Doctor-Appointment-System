const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsControllers,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");

const router = express.Router();

// GET METHOD || USER
router.get("/getAllUsers", authMiddleware, getAllUsersController);

// GET METHOD || DOCTOR
router.get("/getAllDoctors", authMiddleware, getAllDoctorsControllers);

// POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;

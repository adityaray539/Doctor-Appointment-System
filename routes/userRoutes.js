const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

// Auth || POST
router.post("/getUserData", authMiddleware, authController);

// Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

// Notification || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

// Notification || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);


// GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookAppointmentController)

//BOOKING Availability
router.post('/booking-availability', authMiddleware, bookingAvailabilityController)

// APPOINTMENT LIST
router.get('/user-appointments', authMiddleware, userAppointmentsController)

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getNotes,
  setNote,
  deleteNote,
} = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getNotes).post(protect, setNote);
router.route("/:id").delete(protect, deleteNote);

module.exports = router;

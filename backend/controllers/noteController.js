const asyncHandler = require("express-async-handler");

// Models
const Note = require("../models/noteModel");
const User = require("../models/userModel");

// --description:   Get notes
// --route:  GET /api/notes
// --access: Private
// ---------------------------------
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user.id });

  res.status(200).json(notes);
});

// --description:   Set note
// --route:  SET /api/notes
// --access: Private
// ---------------------------------
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add some words");
  }

  const note = await Note.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(note);
});

// --description:   Delete note
// --route:  DELETE /api/notes/:id
// --access: Private
// ---------------------------------
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found !");
  }

  if (note.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await note.remove();

  res.status(200).json({ id: req.params.id });
});

// --description:   Update note
// --route:  PUT /api/notes/:id
// --access: Private
// ---------------------------------
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found !");
  }

  if (note.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
});

module.exports = {
  getNotes,
  setNote,
  deleteNote,
  updateNote,
};

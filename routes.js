const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteById,
  deleteNote,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteById,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNote,
  },
];
module.exports = routes;

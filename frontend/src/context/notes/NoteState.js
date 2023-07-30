import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = `https://ownnote.onrender.com`;

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async() => {
    //todo api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  
  //Add a Notes
  const addNote = async(title, description, tag) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({title, description, tag}),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Delete a Notes
  const deleteNote = async(id) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    response.json();

    //Logic to delete the client's notes
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //Edit a Notes
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({title, description, tag}),
    });
    await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit the client's notes
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

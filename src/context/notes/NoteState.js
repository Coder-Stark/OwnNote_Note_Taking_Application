import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "641d411313413cc3e382df3c37165d",
      user: "641a91933413bec0922b45c1d67e",
      title: "New Note updated",
      description: "Please access the inotebook updated",
      tag: "business",
      date: "2023-03-24T06:20:03.667Z",
      __v: 0,
    },
    {
      _id: "641d4113cc3241234e3822df3c3765d",
      user: "641a9193bec2520922b45c1d67e",
      title: "New Note updated",
      description: "Please access the inotebook updated",
      tag: "business",
      date: "2023-03-24T06:20:03.667Z",
      __v: 0,
    },
    {
      _id: "641d4113cc34245234e382df3c3765d",
      user: "641a9193bec01341922b45c1d67e",
      title: "New Note updated",
      description: "Please access the inotebook updated",
      tag: "business",
      date: "2023-03-24T06:20:03.667Z",
      __v: 0,
    },
    {
      _id: "641d411345c2452345c3e382df3c3765d",
      user: "641a9193bec0234922b45c1d67e",
      title: "New Note updated",
      description: "Please access the inotebook updated",
      tag: "business",
      date: "2023-03-24T06:20:03.667Z",
      __v: 0,
    },
    {
      _id: "6641da77a2331d08aac2a06d1",
      user: "641a9193bec0922b45c1d6723e",
      title: "New Note2 ",
      description: "Please access the inotebook 2",
      tag: "business 2",
      date: "2023-03-24T13:36:58.863Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a Notes
  const addNote = (title, description, tag) => {
    //todo api call
    console.log("Adding a new note")
    const note ={
      _id: "6641da77a2331d08aac2a06d1",
      user: "641a9193bec0922b45c1d6723e",
      title: title,
      description: description,
      tag: tag,
      date: "2023-03-24T13:36:58.863Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a Notes
  const deleteNote = (id) => {
    //todo api call
    console.log("Delete the note with Id " + id)
    const newNote = notes.filter((note)=>{return note._id !== id})
    setNotes(newNote);
  };

  //Edit a Notes
  const editNote = (id, title, description,tag) => {};

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

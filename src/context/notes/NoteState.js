import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "662e0966dd96be5918c3b53c",
      user: "662c8c000d8c5e5c6820d15c",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-04-28T08:31:34.493Z",
      __v: 0,
    },
    {
        _id: "662e0966dd96be5918c3b53c",
        user: "662c8c000d8c5e5c6820d15c",
        title: "My title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2024-04-28T08:31:34.493Z",
        __v: 0,
      },
      {
        _id: "662e0966dd96be5918c3b53c",
        user: "662c8c000d8c5e5c6820d15c",
        title: "My title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2024-04-28T08:31:34.493Z",
        __v: 0,
      },
      {
        _id: "662e0966dd96be5918c3b53c",
        user: "662c8c000d8c5e5c6820d15c",
        title: "My title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2024-04-28T08:31:34.493Z",
        __v: 0,
      },
      {
        _id: "662e0966dd96be5918c3b53c",
        user: "662c8c000d8c5e5c6820d15c",
        title: "My title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2024-04-28T08:31:34.493Z",
        __v: 0,
      },
      {
        _id: "662e0966dd96be5918c3b53c",
        user: "662c8c000d8c5e5c6820d15c",
        title: "My title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2024-04-28T08:31:34.493Z",
        __v: 0,
      },
      {
        _id: "662e0966dd96be5918c3b53c",
        user: "662c8c000d8c5e5c6820d15c",
        title: "My title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2024-04-28T08:31:34.493Z",
        __v: 0,
      },
      {
        _id: "662e0966dd96be5918c3b53c",
        user: "662c8c000d8c5e5c6820d15c",
        title: "My title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2024-04-28T08:31:34.493Z",
        __v: 0,
      }
  ];

  const [ notes, setNotes ] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

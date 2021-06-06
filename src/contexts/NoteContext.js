import React, { createContext, useEffect, useState } from 'react'
import { v1 } from 'uuid/'

export const NoteContext = createContext();

const NoteContextProvider = (props) => {

    const localData = localStorage.getItem('notes');

    const [notes, setNotes] = useState( localData ? JSON.parse(localData) : [] );

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (title, body) => {
        setNotes([...notes, {title, body, id: v1()}]);
    }

    const removeNote = ( id ) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, removeNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider

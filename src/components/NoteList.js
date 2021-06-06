import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'
import { NoteDetails } from './NoteDetails';

export const NoteList = () => {

    const { notes } = useContext(NoteContext);

    return notes.length ? (
        <ul className="is-grid px-6">

            {notes.map(note => {
                return (
                    <NoteDetails note={note} key={note.id}/>
                )
            })}

        </ul>
    ) : (
        <p style={{textAlign: 'center'}}>Notes you add will show up here 😇</p>
    )
}

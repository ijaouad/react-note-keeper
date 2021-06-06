import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

export const NoteDetails = ({ note }) => {

    const { removeNote } = useContext(NoteContext);

    return (
        <li key={note.id} className="box notification is-white">
            <div className="content">
                <p className="title">{note.title}</p>
                <p className="subtitle">{note.body}</p>
            </div>
            <button 
                className="delete-button button is-white is-small" 
                onClick={() => {
                    removeNote(note.id)
            }}/>
        </li>
    )
}

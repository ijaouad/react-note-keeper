import React, { useContext, useState } from 'react'
import { NoteContext } from '../contexts/NoteContext';

export const NoteForm = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { addNote } = useContext(NoteContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === '' && body === '') {
            return;
        }
        addNote(title, body);
        setTitle('');
        setBody('');
    }

    return (
        <section className="section px-6">

            <form className="card p-3" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    required
                    placeholder="Title"
                    value={title}
                    className="input is-light mb-1"
                    onChange={(e) => setTitle(e.target.value)} />
                
                <textarea
                    rows="1"
                    required
                    placeholder="Take a note"
                    value={body}
                    className="textarea is-light mb-2"
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>

                <div id="control-buttons">
                    <button type="submit" id="add-note" className="button is-light is-small">
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </div>

            </form>
    
        </section>
    )
}

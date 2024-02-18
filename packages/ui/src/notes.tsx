'use client'
import { useState, useEffect } from 'react';

interface NotesProps {
    notesId: string;
}

export const Notes = (props: NotesProps) => {
    const [notes, setNotes] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log('props.key 111111111', props.notesId);
        const storedNotes = localStorage.getItem(props.notesId);
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    const saveNotes = (notes: string[]) => {
        setNotes(notes);
        localStorage.setItem(props.notesId, JSON.stringify(notes));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddNote = () => {
        if (inputValue.trim() !== '') {
            saveNotes([...notes, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteNote = (index: number) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        saveNotes(updatedNotes);
    };

    return (
        <div className="flex flex-col items-center ">
            <label htmlFor="note-input" className="mb-2">Add a note</label>
            <input
                id='note-input'
                placeholder=''
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddNote();
                    }
                }}
                className="border border-gray-300 rounded px-2 py-1 mb-2"
            />
            <button type='button' onClick={handleAddNote} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add </button>
            <ul className="justify-center p-2 items-center w-1/2">
                {notes.map((note, index) => (
                    <li key={index} className="flex items-center justify-between border-b border-gray-300 py-2 justify-center">
                        <span>{note}</span>
                        <button onClick={() => handleDeleteNote(index)} className="text-red-500">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
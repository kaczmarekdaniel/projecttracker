import React, { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import { motion } from "framer-motion";

type Note = {
    id: string;
    title: string;
    color: string;
};

const Notes = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [showPlaceholder, setShowPlaceholder] = useState(false);

    const addNote = (title: string, color: string) => {
        setShowPlaceholder(true);
      setTimeout(() => {
        setNotes((prevNotes) => [
            {
                id: Math.random().toString(36).substr(2, 9),
                title,
                color,
            },
            ...prevNotes,
        ]);
        setShowPlaceholder(false);
        }, 400);
    };

    useEffect(() => {
        console.log(notes);
    }, [notes]);

    return (
        <div className="h-full flex items-start gap-16 p-24">
            <AddNote addNote={addNote} />

            <div className="flex flex-col items-start gap-12 w-full h-auto">
                <h1 className="text-2xl">Notes</h1>
                <div className="flex items-start justify-start flex-row flex-wrap gap-4 w-full h-full">
                    {showPlaceholder && (
                        <motion.div
                            className="w-48 h-48 bg-foreground-muted rounded-md"
                            initial={{ x: 120, y: 20,  width: "0px", marginRight: 60 }}
                            animate={{ x: 0, y: 0,width: "222px", marginRight: 0 }}
                            transition={{ type: 'just', duration: .2,  stiffness: 260 }}
                        />
                    )}
                    {notes.map((note) => (
                        <motion.div
                            key={note.id}
                            className={`${note.color} w-48 h-48 rounded-md`}
                            initial={{ x: 40, y: 10, marginRight: 30}}
                            animate={{ x: 0, y: 0, marginRight: 0 }}
                            transition={{ type: 'spring', duration: .3,  stiffness: 260 }}
                            
                        >
                            {note.title}
                        </motion.div>
                    ))}

                    {notes.length === 0 && (
                        <p className="text-foreground-muted">No notes yet</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notes;

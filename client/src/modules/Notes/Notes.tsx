import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Note from "./components/Note";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import drawnIcon from "../../assets/arrow-left.svg";
import {
    MDXEditor,
    UndoRedo,
    BoldItalicUnderlineToggles,
    toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export type TNote = {
    id: string;
    title: string;
    color: string;
};

const defaultSnippetContent = `
export default function App() {
return (
<div className="App">
<h1>Hello CodeSandbox</h1>
<h2>Start editing to see some magic happen!</h2>
</div>
);
}
`.trim();

const Notes = () => {
    const [notes, setNotes] = useState<TNote[]>([]);
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [activeNote, setActiveNote] = useState<TNote | null>(null);
    const markdown = "";

    useEffect(() => {
        console.log("notes", notes);
    }, [notes]);

    useEffect(() => {
        console.log("notes", notes);
    }, [markdown]);

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

    return (
        <LayoutGroup>
            <div className="h-full flex items-start gap-16 p-24">
                <AddNote addNote={addNote} />

                <div className="flex flex-col items-start gap-12 w-full h-auto">
                    <h1 className="text-4xl font-bold">Notes</h1>
                    <div className="flex items-start justify-start flex-row flex-wrap gap-4 w-full h-full relative">
                        {showPlaceholder && (
                            <motion.div
                                className="w-48 h-48 bg-foreground-muted rounded-md"
                                initial={{
                                    x: 120,
                                    y: 20,
                                    width: "0px",
                                    marginRight: 60,
                                }}
                                animate={{
                                    x: 0,
                                    y: 0,
                                    width: "222px",
                                    marginRight: 0,
                                }}
                                transition={{
                                    type: "just",
                                    duration: 0.2,
                                    stiffness: 260,
                                }}
                            />
                        )}
                        {notes.map((note) => (
                            <Note
                                key={note.id}
                                note={note}
                                onClick={setActiveNote}
                                className={`${activeNote ? "opacity-0 " : ""}`}
                            />
                        ))}

                        <AnimatePresence>
                            {activeNote && (
                                <>
                                    <motion.div
                                        layoutId={activeNote.id}
                                        className={`${activeNote.color} rounded-lg w-full h-[60vh] p-6 absolute top-0 left-0 z-50 flex flex-col items-start justify-start gap-4`}
                                        initial={{ opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                        }}
                                    >
                                        <button
                                            onClick={() => setActiveNote(null)}
                                        >
                                            <ArrowLeftIcon className="w-6 h-6" />
                                        </button>

                                        <motion.h2
                                            className="text-black font-semibold text-2xl"
                                            layout={false}
                                            layoutId={`title-container-${activeNote.id}`}
                                        >
                                            New Note
                                        </motion.h2>

                                        <MDXEditor
                                            className="w-full h-full text-left rounded-md bg-white/30"
                                            markdown={markdown}
                                            onChange={(value) =>
                                                console.log(value)
                                            }
                                            plugins={[
                                                toolbarPlugin({
                                                    toolbarContents: () => (
                                                        <>
                                                            {" "}
                                                            <UndoRedo />
                                                            <BoldItalicUnderlineToggles />
                                                        </>
                                                    ),
                                                }),
                                            ]}
                                        />
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>

                        {!showPlaceholder && notes.length === 0 && (
                            <div className="ml-10 mt-2 opacity-90">
                                <motion.div
                                    className="absolute w-36 h-10 bg-background z-20"
                                    animate={{ width: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                />
                                <img src={drawnIcon} className="w-32 z-10" />

                                <motion.p
                                    className="font-drawn text-foreground-muted ml-24 mt-0 font-bold text-2xl text-right"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    Add your <br /> first note here!
                                </motion.p>
                            </div>
                        )}
                    </div>
                    {activeNote && (
                        <div onClick={() => setActiveNote(null)} className="absolute top-0 left-0 w-full h-full"></div>
                    )}
                </div>
            </div>
        </LayoutGroup>
    );
};

export default Notes;

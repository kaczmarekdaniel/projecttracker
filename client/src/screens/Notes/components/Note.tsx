import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { TNote } from "../Notes";
import { Pencil1Icon, SizeIcon } from "@radix-ui/react-icons";

type NoteProps = {
    note: {
        id: string;
        title: string;
        color: string;
    };
    onClick: (id: TNote) => void;
    className?: string;
};

const Note: React.FC<NoteProps> = ({ note, onClick, className }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
            y: 0,
            marginRight: 0,
            transition: { duration: 0.4, type: "spring", stiffness: 180 },
        });
    }, [controls]);

    return (
        <motion.div
            key={note.id}
            className={cn(
                `${note.color} w-48 h-48
             rounded-md grid grid-cols-4 grid-rows-4 z-10 p-4 pt-6 pl-6`,
                className
            )}
            initial={{ x: 30, y: 10, marginRight: 30 }}
            animate={controls}
            layoutId={note.id}
        >
            <div className="col-span-full group row-span-1 ">
                <motion.h3
                    className="text-black font-semibold text-xl text-left cursor-pointer gap-2"
                    layoutId={`title-container-${note.id}`}
                >
                    {note.title}
                    <Pencil1Icon className="inline ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-80 w-5 h-5 text-black align-middle" />
                </motion.h3>
            </div>

            <div className="row-start-4 col-start-4 col-span-1 row-span-1 flex items-center justify-center">
                <button
                    className="w-9 h-9 relative hover:w-10 hover:h-10 transition-all duration-300 bg-white/30 backdrop-blur-lg rounded-full flex items-center justify-center"
                    onClick={() => onClick(note)}
                >
                    <SizeIcon className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
};

export default Note;

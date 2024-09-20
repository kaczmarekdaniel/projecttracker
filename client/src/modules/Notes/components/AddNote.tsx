import React from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Point } from "../types";
import { useProjectileMotion } from "../hooks/useProjectileMotion";
import { AddNoteBtn } from "../types";

type ClickAnimationComponentProps = {
    children: React.ReactNode;
    addNote: () => void;
    endPoint: Point; // End point is now configurable
};

function ClickAnimationComponent({
    children,
    addNote,
    endPoint,
    className,
}: ClickAnimationComponentProps) {
    const start: Point = { x: 0, y: 0 };
    const peak: Point = { x: 100, y: -70 }; // Adjust as needed
    const end: Point = endPoint; // Set the same end point for all

    const [controls, startAnimation] = useProjectileMotion(
        start,
        peak,
        end,
        0.5
    );

    return (
        <motion.div
            initial={{ scale: 1 }}
            animate={controls}
            className={className}
            onClick={() => {
                startAnimation();
                addNote();
            }}
            // onAnimationComplete={}
        >
            {children}
        </motion.div>
    );
}

type AddNoteProps = {
    addNote: (title: string, color: string) => void;
};

const AddNote: React.FC<AddNoteProps> = ({ addNote }) => {
    const initialDots: AddNoteBtn[] = [
        {
            x: 118,
            y: 10,
            color: "bg-red-200",
        },
        {
            x: 118,
            y: -35,
            color: "bg-purple-200",
        },
        {
            x: 118,
            y: -60,
            color: "bg-blue-200",
        },
        
    ];
    const [dots, setDots] = React.useState<AddNoteBtn[]>(initialDots);

    const moveDotToTheTop = (dot: AddNoteBtn) => {
        setDots((prevDots) => [dot, ...prevDots]);
    };

    return (
        <aside className="col-span-1 row-span-8 flex flex-col items-center justify-start gap-12 border-r border-solid border-foreground-muted">
            <button className="rounded-full w-8 h-8 flex items-center justify-center bg-foreground">
                <PlusIcon className="text-white" />
            </button>
            <ul className="flex items-center justify-center flex-col gap-3 relative">
                {dots.map((dot, index) => (
                    <li key={index}>
                        <ClickAnimationComponent
                            addNote={() => addNote("New Note", dot.color)}
                            endPoint={dot}
                            className={`w-6 h-6 ${dot.color} rounded-full`}
                        />
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default AddNote;

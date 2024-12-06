import React from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Point } from "../types";
import { useProjectileMotion } from "../hooks/useProjectileMotion";
import { AddNoteBtn } from "../types";
import AddNoteItemWrapper from "./AddNoteItemWrapper";

type ClickAnimationComponentProps = {
    children: React.ReactNode;
    addNote: () => void;
    endPoint: Point;
    className: string;
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

    const [controls, startAnimation] = useProjectileMotion(start, peak, end);

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
            x: 125,
            y: 12,
            color: "bg-red-200",
        },
        {
            x: 125,
            y: -22,
            color: "bg-purple-200",
        },
        {
            x: 125,
            y: -68,
            color: "bg-blue-200",
        },
    ];
    const [dots] = React.useState<AddNoteBtn[]>(initialDots);
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <aside className="col-span-1 row-span-8 flex flex-col items-center justify-start gap-12 border-solid border-foreground-muted">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full w-8 h-8 flex items-center justify-center bg-foreground"
            >
                <PlusIcon className="text-white" />
            </button>
            {isOpen && (
                <ul className="flex items-center justify-center flex-col gap-3 relative">
                    {dots.map((dot, index) => (
                        <AddNoteItemWrapper
                            key={index}
                            color={dot.color}
                            delay={index * 0.3}
                        >
                            <ClickAnimationComponent
                                addNote={() => addNote("New Note", dot.color)}
                                endPoint={dot}
                                className={`group w-6 h-6 ${dot.color} rounded-full flex items-center justify-center`}
                            >
                                <PlusIcon className="rounded-full w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </ClickAnimationComponent>
                        </AddNoteItemWrapper>
                    ))}
                </ul>
            )}
        </aside>
    );
};

export default AddNote;

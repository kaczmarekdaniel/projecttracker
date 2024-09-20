import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Note = ({ note }) => {
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation(); // useAnimation hook to control the animation manually

    // Handle button click to toggle the isOpen state
    const handleButtonClick = () => {
        setIsOpen((prev) => !prev);
    };

    // Mount animation when the component is mounted
    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0, 
            y: 0,
            marginRight: 0,
            transition: { duration: 0.3, type: "spring", stiffness: 260 },
        });
    }, [controls]);

    // Expand and Close animation on state change
    useEffect(() => {
        if (isOpen) {
            // Expand animation
            controls.start({
                width: "100%",
                height: "60vh",
                transition: {
                    duration: 0.3,
                    type: "spring",
                },
            });
        } else {
            controls.start({
                width: "192px",
                height: "192px",
                transition: {
                    duration: 0.3,
                    type: "spring",
                },
            });
        }
    }, [isOpen, controls]);

    return (
        <motion.div
            key={note.id}
            className={`${note.color} ${
                isOpen ? " z-50 w-full h-[60vh]" : "relative w-48 h-48"
            } rounded-md flex items-start justify-start flex-col`}
            initial={{ x: 40, y: 10, marginRight: 30 }} // Initial animation state
            animate={controls} // Hook the animate to the controls
        >
            <h3 className="text-black opacity-70 font-bold text-lg">
                {note.title}
            </h3>

            <button onClick={handleButtonClick}>
                {isOpen ? "Close" : "Open"}
            </button>
        </motion.div>
    );
};

export default Note;

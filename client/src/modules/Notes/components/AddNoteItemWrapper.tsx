import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
    color: string;
    children?: React.ReactNode;
    delay: number;
};

const AddNoteItemWrapper: React.FC<Props> = ({ delay, color, children }) => {
    const click = useAnimation();

    useEffect(() => {
        triggerLoadAnimation();
    }, []);

    const triggerLoadAnimation = () => {
        console.log("animation triggered");
        click.start({
            y: [-36, 8, 0],
            display: ["none", "block"],
            transition: {
                duration: 0.3,
                delay: delay,
                stiffness: 260,
                damping: 20,
                ease: "easeInOut",
            },
        });
    };

    const triggerClickAnimation = () => {
        console.log("animation triggered");
        click.start({
            x: [0, -3, 0],
            y: [0, 4, 0],
            transition: {
                duration: 0.3,
            },
        });
    };

    return (
        <motion.li
            className={`w-6 h-6 ${color} rounded-full cursor-pointer`}
            onClick={triggerClickAnimation}
            animate={click}
        >
            {children}
        </motion.li>
    );
};

export default AddNoteItemWrapper;

import { AnimationControls } from "framer-motion";
import { useAnimation } from "framer-motion";
import { Point } from "../types";
import { interpolatePoints } from "../helpers/interpolatePoints";

export const useProjectileMotion = (
    start: Point,
    peak: Point,
    end: Point,
    duration = 2
): [AnimationControls, () => void] => {
    const controls = useAnimation();

    const motionPath = interpolatePoints(start, peak, end);

    const startAnimation = () => {
        const keyframes = {
            x: motionPath.map((point) => point.x),
            y: motionPath.map((point) => point.y),
            height: ["6px", "5px", "45px", "192px"],
            width: ["13px", "18px", "45px", "192px"], // Example height keyframes
            rotate: [-40, 0, 30, 0],
            borderRadius: [50, 50, 20, 10],
        };

        controls.start({
            x: keyframes.x,
            y: keyframes.y,
            height: keyframes.height,
            width: keyframes.width,
            rotate: keyframes.rotate,
            borderRadius: keyframes.borderRadius,
            position: "absolute",
            transition: {
                duration: .40, 
                ease: "easeInOut",
                times: {
                    height: [0.1, 0.5, 1, 1.4],
                    width: [0.1, 0.5, 1, 1.4],
                    rotate: [0.1, 0.5, 1, 1.4],
                    borderRadius: [0.1, 0.5, 1, 1.4],
                },
            },
        }).then(() => {
            // alert("Animation complete");
            controls.set({ x: 0, y: 0, width: "24px", height: "24px", rotate: 0, borderRadius: 50, position: "relative" });
        });
    };

    return [controls, startAnimation];
};

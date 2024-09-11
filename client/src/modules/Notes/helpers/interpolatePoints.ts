import { Point } from "../types";


export const interpolatePoints = (
    start: Point,
    peak: Point,
    end: Point,
    numPoints = 50
): Point[] => {
    const points: Point[] = [];
    for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        const x =
            (1 - t) * ((1 - t) * start.x + t * peak.x) +
            t * ((1 - t) * peak.x + t * end.x);
        const y =
            (1 - t) * ((1 - t) * start.y + t * peak.y) +
            t * ((1 - t) * peak.y + t * end.y);
        points.push({ x, y });
    }
    return points;
};

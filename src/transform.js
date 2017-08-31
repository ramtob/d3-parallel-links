import {isMethodExact} from "./config";

/**
 * @param {number} targetDistance
 * @param {x,y} point0
 * @param {x,y} point1, two points that define a line segmemt
 * @returns
 * a translation {dx,dy} from the given line segment, such that the distance
 * between the given line segment and the translated line segment equals
 * targetDistance
 */
function calcTranslationExact(targetDistance, point0, point1) {
    let x1_x0 = point1.x - point0.x,
        y1_y0 = point1.y - point0.y,
        x2_x0, y2_y0;
    if (y1_y0 === 0) {
        x2_x0 = 0;
        y2_y0 = targetDistance;
    } else {
        let angle = Math.atan((x1_x0) / (y1_y0));
        x2_x0 = -targetDistance * Math.cos(angle);
        y2_y0 = targetDistance * Math.sin(angle);
    }
    return {
        dx: x2_x0,
        dy: y2_y0
    };
}

/**
 * @param {number} targetDistance
 * @param {x,y} point0
 * @param {x,y} point1, two points that define a line segmemt
 * @returns
 * a translation {dx,dy} from the given line segment, such that the distance
 * between the given line segment and the translated line segment satisfies
 * the condition: targetDistance < distance < 1.42 * targetDistance
 */
function calcTranslationApproximate(targetDistance, point0, point1) {
    let x1_x0 = point1.x - point0.x,
        y1_y0 = point1.y - point0.y,
        x2_x0, y2_y0;
    if (targetDistance === 0) {
        x2_x0 = y2_y0 = 0;
    } else if (y1_y0 === 0 || Math.abs(x1_x0 / y1_y0) > 1) {
        y2_y0 = -targetDistance;
        x2_x0 = targetDistance * y1_y0 / x1_x0;
    } else {
        x2_x0 = targetDistance;
        y2_y0 = targetDistance * (-x1_x0) / y1_y0;
    }
    return {
        dx: x2_x0,
        dy: y2_y0
    };
}

function transform(d) {
    let calcTranslation = isMethodExact() ? calcTranslationExact : calcTranslationApproximate;
    let translation = calcTranslation(d.targetDistance, d.source, d.target);
    return `translate (${translation.dx}, ${translation.dy})`;
}

export {transform};
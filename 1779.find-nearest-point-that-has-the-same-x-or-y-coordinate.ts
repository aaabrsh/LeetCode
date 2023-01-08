/*
 * @lc app=leetcode id=1779 lang=typescript
 *
 * [1779] Find Nearest Point That Has the Same X or Y Coordinate
 */

// @lc code=start
function nearestValidPoint(x: number, y: number, points: number[][]): number {
    //Manhattan Distance : |x1 - x2| + |y1 - y2| for (x1, y1) & (x2, y2)
    //Valid point is if it shares the same x-coordinate or the same y-coordinate as the location(x & y).

    /**
     * Steps:
     * 1. check if valid
     * 2. if valid then calculate manhattan distance
     * 3. save its index if distance is lessthan the last smallest distance
     * 4. return the index
     */

    let smallestDistance: number | undefined = undefined;
    let index: number = -1;

    for (let i: number = 0; i < points.length; i++) {
        if (points[i][0] == x || points[i][1] == y) {//if point is valid
            let curDistance = manhattanDistance([x, y], points[i]);
            if (smallestDistance === undefined || curDistance < smallestDistance) {
                //if current distance is smaller than the last smallest distance
                smallestDistance = curDistance;
                index = i;
            }
        }
    }

    return index;
};

function manhattanDistance(point1: number[], point2: number[]): number {
    //Manhattan Distance : |x1 - x2| + |y1 - y2| for (x1, y1) & (x2, y2)
    return (Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]));
}
// @lc code=end


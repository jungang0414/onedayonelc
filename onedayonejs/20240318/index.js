let points = [[10, 16], [2, 8], [1, 6], [7, 12]];

var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]); 

    let arrows = 1;
    let end = points[0][1];
    console.log(end);
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] > end) {

            arrows++;
            end = points[i][1];
        } else {
            console.log(end);
            end = Math.min(end, points[i][1]);
        }
    }
    return arrows;
}

findMinArrowShots(points)
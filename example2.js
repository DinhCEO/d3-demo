import * as d3 from 'd3'


let data = [100];

let listSvg = d3.select('#example2').selectAll('svg').data(data);


let svg = listSvg.enter()
    .append('svg')
    .attr('width', 600)
    .attr('height', 600);
// <path id="lineAB" d="M 100 350 l 150 -300" stroke="red" stroke-width="3" fill="none" />
// <path id="lineBC" d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
//     <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
//     <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />
// <circle id="pointA" cx="100" cy="350" r="3" />
//
// svg.insert('circle')
//     .attr('id', 'pointA')
//     .attr('stroke', 'red')
//     .attr('stroke-width', '6')
//     .attr('fill', 'red')
//     .attr('cx', '100')
//     .attr('cy', '350')
//     .attr('r', '6');
// svg.insert('circle')
//     .attr('id', 'pointB')
//     .attr('stroke', 'blue')
//     .attr('stroke-width', '6')
//     .attr('fill', 'blue')
//     .attr('cx', '300')
//     .attr('cy', '50')
//     .attr('r', '6');
// svg.insert('circle')
//     .attr('id', 'pointC')
//     .attr('stroke', 'yellow')
//     .attr('stroke-width', '6')
//     .attr('fill', 'yellow')
//     .attr('cx', '450')
//     .attr('cy', '350')
//     .attr('r', '6');
// svg.insert('path')
//     .attr('d', 'M100 350 l 200 -300')
//     .attr('stroke', 'green')
//     .attr('stroke-width', '6')
//     .attr('fill', 'blue');
// svg.insert('path')
//     .attr('d', 'M100 350 q 150 -300 300 0')
//     .attr('stroke', 'black')
//     .attr('stroke-width', '6')
//     .attr('fill', 'none');


let lineData = [{"x": 1, "y": 5}, {"x": 20, "y": 20},
    {"x": 40, "y": 10}, {"x": 60, "y": 40},
    {"x": 80, "y": 5}, {"x": 100, "y": 60}];

var lineFunction = d3.line()
    .x(function (d) {
        return d.x;
    })
    .y(function (d) {
        return d.y;
    });

//The line SVG Path we draw
var lineGraph = svg.append("path")
    .attr("d", lineFunction(lineData))
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("fill", "none")
    .curve(d3.curveLinear);


listSvg.exit().remove();
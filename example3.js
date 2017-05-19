import * as d3 from 'd3'


let data = [1];
let svgGroup = d3.select('#example3').selectAll('svg').data(data);


let svg = svgGroup.enter()
    .append('svg')
    .attr('width', 600)
    .attr('height', 600);
let axisScale = d3.scaleLinear().domain([0, 1000]).range([0, 200]);
//Create the Axis
let xAxisLeft = d3.axisLeft().scale(axisScale);
let xAxisRight = d3.axisRight().scale(axisScale);
let xAxisTop = d3.axisTop().scale(axisScale);
let xAxisBottom = d3.axisBottom().scale(axisScale);


svg.insert('g').call(xAxisLeft);

svgGroup.exit().remove();
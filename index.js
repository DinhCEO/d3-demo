import * as d3 from "d3";


let data = [100, 222, 136, 147, 258, 115, 170, 143, 190, 150];


let svgList = d3.select('#d3-rect').selectAll("svg").data(data);
let svg = svgList.enter()
    .append('svg')
    .attr('width', 50)
    .attr('height', 300)
    .attr('transform', (d, i) => {
        return 'translate(' + i * 2 + ',' + 0 + ')';
    });

svg.insert('rect')
    .attr('x', 0)
    .attr('y', d => 300 - d)
    .attr('width', 50)
    .attr('height', d => d)
    .attr('fill', 'green');

svg.insert('text')
    .text((d) => d)
    .attr('x', 19)
    .attr('y', d => 300 - d - 2)
    .attr('fill', 'black');

svgList.exit().remove();


let makeNewData = function () {
    let newData = [];
    for (let i = 0; i < 13; i++) {
        newData.push(Math.floor((Math.random() * 200) + 50));
    }
    return newData;
};

let change = (newData) => {
    let listSvg = d3.select('#d3-rect').selectAll("svg").data(newData);

    //Enter
    let new_svg = listSvg.enter()
        .append('svg')
        .attr('width', 50)
        .attr('height', 300)
        .attr('transform', (d, i) => {
            return 'translate(' + i * 2 + ',' + 0 + ')';
        });
    new_svg.insert('rect')
        .transition()
        .duration(750)
        .attr('x', 0)
        .attr('y', d => 300 - d)
        .attr('width', 50)
        .attr('height', d => d)
        .attr('fill', 'green');
    new_svg.insert('text')
        .text((d) => d)
        .attr('x', 19)
        .attr('y', d => 300 - d - 2)
        .attr('fill', 'black');


    //update
    listSvg.select('rect')
        .transition()
        .duration(750)
        .attr('height', d => d)
        .attr('y', d => 300 - d);

    let text = listSvg.select('text');
    text.text(d => d)
        .transition()
        .duration(750)
        .attr('y', d => 300 - d - 2);

    //Exit
    listSvg.exit().remove();
};

// setInterval(function () {
//     return change(makeNewData());
// }, 1000);



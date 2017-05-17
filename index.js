import * as d3 from "d3";


let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let svg = d3.select('body').selectAll("svg").data(data).enter().append("svg");
console.log(svg);

svg.attr('width', 50)
    .style('margin-right', '20px');

let rect = svg.insert('rect')
    .attr('x', 0)
    .attr('y', 20)
    .attr('width', 50)
    .attr('height', 100)
    .attr('fill', 'green');
console.log(rect);

svg.insert('text').text((d) => d)
    .attr('x', 19).attr('y', 15).attr('fill', 'black');


let makeNewData = function () {
    let newData = [];
    for (let i = 0; i < 10; i++) {
        newData.push(Math.floor((Math.random() * 100) + 1));
    }
    return newData;
};


let change = (newData) => {
    let listSvg = d3.select('body').selectAll("svg").data(newData);
    listSvg.enter().append("svg");
    svg.attr('width', 50)
        .style('margin-right', '20px');

    let rect = svg.insert('rect')
        .attr('x', 0)
        .attr('y', 20)
        .attr('width', 50)
        .attr('height', d => d)
        .attr('fill', 'green');

    svg.insert('text').text((d) => d)
        .attr('x', 19).attr('y', 15).attr('fill', 'red');
};


setInterval(function () {
    return change(makeNewData());
}, 1000);

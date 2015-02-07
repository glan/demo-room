/**
 * © 2015 - Glan Thomas & Leslie Dutton
 */

'use strict';

var d3 = require('d3');

function onDrag() {
    var dx = 90 - ((d3.event) ? (d3.event.y / 10) : 30),
        dz = 90 - ((d3.event) ? (d3.event.x / 10) : 90);
    this.style.webkitTransform =
        'translate3d(-webkit-calc(50% - 300px),-webkit-calc(50% + 150px),100px) rotateX(' + dx + 'deg) rotateZ(' + dz + 'deg)';
}

var drag = d3.behavior.drag()
    .on("drag", onDrag);

d3.select('.room').call(drag);

onDrag.call(document.querySelector('.room'));

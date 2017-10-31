# d3-parallel-links

A small plugin for graph-drawing apps, and specifically for apps that use d3.js, that makes it possible to draw several straight, parallel links between any two nodes in the graph

## Installing

If you use NPM, `npm install d3-parallel-links`. Otherwise, download the [latest release](https://github.com/d3/d3-parallel-links/releases/latest).

## API Reference

YOUR API DOCUMENTATION HERE. Use bold for symbols (such as constructor and method names) and italics for instances. See the other D3 modules for examples.

d3.**parallelLinksInitLinks**(links, LINK_WIDTH = 2)

Calling this method is a necessary init step. The first parameter is the links array of your graph data. The second, optional parameter, informs _parallel-links_ about how your style your link widths in pixels. _parallel-links_ uses it to set the spacing between each two adjacent parallel links.

d3.**parallelLinksTransform**(linkDatum)

This method does the actual drawing of the parallel links, by computing a css transform that will translate the given link in the appropriate direction and distance. It can be used in the following way, with standard d3 selections:

  link
                .attr('x1', function (d) {
                    return d.source.x;
                })  
                .attr('y1', function (d) {
                    return d.source.y;
                })  
                .attr('x2', function (d) {
                    return d.target.x;
                })  
                .attr('y2', function (d) {
                    return d.target.y;
                })  
                .attr('stroke', function (d) {
                    return d.color;
                })  
                .attr('transform', d3.parallelLinksTransform)
                
                
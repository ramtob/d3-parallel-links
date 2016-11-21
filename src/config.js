//"use strict";

var _isMethodExact = true;

function isMethodExact() {
    return _isMethodExact;
}

function setMethodExact(on) {
    if (typeof on === "undefined") on = true;
    _isMethodExact = on;
}

function setMethodApprox() {
    setMethodExact(false);
}

export {isMethodExact};
export {setMethodExact};
export {setMethodApprox};

/**
 * @description
 * Build an index to help handle the case of multiple links between two nodes
 * @param links the link array
 * @param LINK_WIDTH default link width in pixels
 */
function initLinks(links, LINK_WIDTH ) {
    var linksFromNodes = {};
    links.forEach(function (val, idx) {
        var sid = val.source,
            tid = val.target,
            key = (sid < tid ? sid + "," + tid : tid + "," + sid);
        if (linksFromNodes[key] === undefined) {
            linksFromNodes[key] = [idx];
            val.multiIdx = 1;
        } else {
            val.multiIdx = linksFromNodes[key].push(idx);
        }
        // Calculate target link distance, from the index in the multiple-links array:
        // 1 -> 0, 2 -> 2, 3-> -2, 4 -> 4, 5 -> -4, ...
        val.targetDistance = (val.multiIdx % 2 === 0 ? val.multiIdx * LINK_WIDTH : (-val.multiIdx + 1) * LINK_WIDTH);
    });
}

export {initLinks};

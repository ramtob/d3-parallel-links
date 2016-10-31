export default function() {
  return 42;
};

 /**
   * @description
   * Select calculation method: exact or approximate.
   * @param {boolean} on Set exact calculation
   */
  function setCalculationExact(on) {
    this.calcTranslation =
      (on ? ParallelLinksExample.calcTranslationExact :
        ParallelLinksExample.calcTranslationApproximate);
  }

  /**
   * @description
   * Build an index to help handle the case of multiple links between two nodes
   */
  function prepareLinks() {
    var that = this,
      linksFromNodes = {};
    this.links.forEach(function(val, idx) {
      var sid = val.source,
          tid = val.targetID,
          key = (sid < tid ? sid + "," + tid : tid + "," + sid);
      if (linksFromNodes[key] === undefined) {
        linksFromNodes[key] = [idx];
        val.multiIdx = 1;
      } else {
        val.multiIdx = linksFromNodes[key].push(idx);
      }
      // Calculate target link distance, from the index in the multiple-links array:
      // 1 -> 0, 2 -> 2, 3-> -2, 4 -> 4, 5 -> -4, ...
      val.targetDistance = (val.multiIdx % 2 === 0 ? val.multiIdx * that.LINK_WIDTH : (-val.multiIdx + 1) * that.LINK_WIDTH);
    });
  }
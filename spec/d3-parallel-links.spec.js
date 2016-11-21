var d3 = require("../build/d3-parallel-links");

describe("Testing d3-parallel-links", function () {
    var nodes, links;

    beforeEach(function () {
        nodes = [{}, {}];
        links = [
            {source:0, target:1},
            {source:0, target:1},
            {source:0, target:1},
            {source:0, target:1}
        ];
    });

    describe("parallelLinksIsMethodExact()", function () {
        var result;

        it("should return false if method is approx", function () {
            d3.parallelLinksSetMethodApprox();
            result = d3.parallelLinksIsMethodExact();
            expect(result).toBeFalsy();
        })
    });

    describe("parallelLinksInitLinks()", function () {

    });

});
var d3 = require("../build/d3-parallel-links");

console.log("spec test...");

describe("parallelLinksIsMethodExact", function () {
    var result;

    it ("shouls return false if method is approx", function () {
        d3.parallelLinksSetMethodApprox();
        result = d3.parallelLinksIsMethodExact();
        expect(result).toBeFalsy();
    })
});
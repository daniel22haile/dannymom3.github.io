"use strict";
/* global pow assert */
describe("pow", function() {

    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3 raised to power 3 is 27", function() {
        assert.equal(pow(3, 3), 27);
    });

});



"use strict";
/* global pow assert max3 */
describe("max3", function() {

    it("max of 1 2 3 is 3", function() {
        assert.equal(3, max3(1, 2, 3));
    });

    it("max of 5  4 -44 is 5", function() {
        assert.equal(5, max3(5, 4, -44));
    });

});
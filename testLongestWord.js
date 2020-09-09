"use strict"
/* global assert testLongestwWord*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */
describe("LongestWord", function() {

    it("The longest word of [Daniel, quick, ThisisDaniel] is 12", function() {
        assert.equal(12, findLongestWord(["Daniel", "quick", "ThisisDaniel"]));
    });

    it("The longest word of [Maharish, Intern, uni] is 8", function() {
        assert.equal(8, findLongestWord(["Maharish", "Intern", "uni"]));
    });

});
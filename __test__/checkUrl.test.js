import {checkUrl} from "../src/client/js/urlCheck.js";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkUrl() function", () => {
        expect(checkUrl("https://www.cbsnews.com/news/russia-ukraine-news-miliatry-reservists-emergency-declaration/")).toBeTruthy();
    })

    test("Testing the checkUrl() function", () => {
         expect(checkUrl("123")).toBeFalsy();
    })
});
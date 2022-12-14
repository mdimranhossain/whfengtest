//@ts-check
/** 
 * run from root folder as : node ./npm-tests/test-02.js
 * 
 * Parse the response from the given REST end point and print out "hobbies" property in the following format: ITEM1, ITEM2, ...
 */
import https from "https";


https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {
    let data = "";
    var json = '';

    resp.on('data', function (chunk) {
        json += chunk;
    });
    resp.on('end', function () {
        if (resp.statusCode === 200) {
            data = JSON.parse(json);
            console.log("Hobbies",data.hobbies);
        } else {
            console.log('Status:', resp.statusCode);
        }
    });
    
    // parse json and print "hobbies" property as ITEM1, ITEM2,...
    
})
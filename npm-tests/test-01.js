//@ts-check
/**
 * run from root folder as : node ./npm-tests/test-01.js
 * 
 * Using fs-extra write the following json (data) into a file (data.json)
 * Through the fastify server and with help from fs-extra read the json saved in "data.json" and print out the data.user in the html response as a list of names each being as <p>{name}</p>m ex : <p>John Doe</p><p>Lucita Esau</p>
 */

import fs from "fs-extra";
import {fastify } from "fastify";

const data = { error : false, users : ["John Doe","Lucita Esau", "Thomas Friedman", "Norma Helms", "Amy Manning"]  };

// write the json saving code here
const jsonString = JSON.stringify(data)
fs.writeFile('./data.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
});

const app = fastify({
    ignoreTrailingSlash : true,
    keepAliveTimeout : 65 * 1000
});

app.get('/',(request,reply)=>{
    

    reply.header('Content-Type', 'text/html; charset=utf-8');
    fs.readFile("./data.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("Error reading file from disk:", err);
          return;
        }
        try {
            const data = JSON.parse(jsonString);
            
        } catch (err) {
          console.log("Error parsing JSON string:", err);
        }
    });
    let list = "";
      data.users.forEach(function(name) {
        list+=`<p>${name}</p>`;
      });
        const page = 
        `<html>
            <head>
                <title>Wallethub Test</title>
            </head>
            <body>
            <p>${list}</p>
            </body>
        </html>`;
        
        reply.send(page);
    
    
});

// server start
app.listen(8080,"0.0.0.0").then((address)=>{
    console.log(`Server started at ${address}`);
});
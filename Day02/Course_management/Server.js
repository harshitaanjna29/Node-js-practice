const http = require("http");   // core module to create http server
const fs = require("fs");       // file system module to read and write files
const path = require("path");   // path module to handle file paths

let courses = [{id:1,title:"java basic"}];  // in-memory array to store course data

const portno = 5678;   // port number for the server to listen on


// creating http server
const server = http.createServer((req, res ) =>{
    const {url , method}= req;   // destructuring assignment to get url and method from request object

    console.log(`Request received: ${url} , Method: ${method}`);

     // serve the HTML file for the home page
    if(url === "/" && method === "GET"){
        fs.readFile(path.join(__dirname,"public", "index.html"), (err, data) =>{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);  
        });
    }
    // return all courses as JSON
    else if(url === "/courses" && method === "GET"){
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(courses));
    }
    // add a new course
    else if(url === "/courses" && method === "POST"){
        let body = "";

        // collect data chunks
        req.on("data", chunk =>{
            body += chunk.toString();
        });

        // when all data is received
        req.on("end", () =>{
            const newCourse = JSON.parse(body); // parse the received JSON data
            courses.push(newCourse);            // add new course to the array
            res.writeHead(201, {"Content-Type":"application/json"});// set response header
            res.end(JSON.stringify(newCourse)); // send back the added course as response
        });

        // serve error.html for unknown routes
    }else{  
        fs.readFile(path.join(__dirname, "error.html"), (err, data) =>{
            res.writeHead(404, {"Content-Type":"text/html"});
            res.end(data);  
        });
    }
})

// start the server and listen on specified port
server.listen(portno, () =>{
    console.log(`Server is listening on port ${portno}`);
});
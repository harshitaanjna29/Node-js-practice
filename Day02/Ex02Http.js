import http, { request } from "http"; 
const portno = 1234 
function processRequest(req, res){ 
    console.log(`request received: ${req.url}`) 
        switch(req.url){ 
                case '/employees': res.end("<h1> Employees Management Page</h1>"); break; 
                        case '/customer': res.end("<h1> Customer Manager Page</h1>"); break; 
                                case '/product': res.end("<h1> Product detail page</h1>"); break; 
                                        default: res.end("<h2> OOPS! Page not found</h2>") } }
                                        http.createServer((request,Response) =>{ processRequest(request,Response) }).listen(portno);
                                        
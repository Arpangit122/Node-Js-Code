import {createServer, request} from "http";

 const Server=createServer((request,response)=>{
    response.setHeader('content-type',"text/html")
    response.write('I love3 you')

    response.end();

})
Server.listen(5000,()=>{
    console.log("server running at port 5000")
}); 
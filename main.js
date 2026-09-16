const http=require("http")
const server=http.createServer((req,res)=>
{
    res.end("hello from Shoaib")
})
server.listen(8080,()=>console.log("server is running on port 8080"))
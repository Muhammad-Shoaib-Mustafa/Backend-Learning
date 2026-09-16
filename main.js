const http=require("http")
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url=="/"){
        res.writeHead(200)
res.end("welcome to homepage")
    }else if(url=="/courses"){
        res.writeHead(200)
        res.end("These are my courses")
    } else if(url=="/tutorials"){
        res.writeHead(200)
        res.end("These are my tutorials")
    }
    else{
        res.writeHead(404)
        res.end("NOT FOUND")
    }
});
server.listen(8080,()=>{console.log("server is running on port 8080")})
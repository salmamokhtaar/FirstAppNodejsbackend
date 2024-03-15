const http = require("http")

const server = http.createServer((req,res) =>{

    if(req.url == '/'){
        res.end("This is The Default Page")
    }
    else if(req.url == '/home'){
        res.end("This is The Home Page")
    }
    else if(req.url == '/about'){
        res.end("This is The about Page")
    }
    else if(req.url == '/contact'){
        res.end("This is The contact Page")
    }
    else if(req.url == '/blog'){
        res.end("This is The blog Page")
    }
    else if(req.url == '/news'){
        res.end("This is The news Page")
    }
    
    else {
        res.end("404 Not Found")
    
    }
})

server.listen(1000, 
    ()=> console.log("port is listening on port 1000")
    )
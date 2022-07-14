var http = require("http") //Create object of http module
http.createServer(          //Create server with request response
    function(req,res)
    {
        res.writeHead(200,{"content-type":"text/html"}) //To write html freely(content type is object)
        res.write("<html>")
        res.write("<body>")
        res.write("<h1>Hello World Server 1</h1>")
        res.write("</body>")
        res.write("</html>")  
        res.end();      
    }
).listen(8080)


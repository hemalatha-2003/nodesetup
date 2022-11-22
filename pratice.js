const http=require("http")

http.createServer((req,res)=>{
	res.write("enjoy ur life with no limits")
	res.end()
}).listen(8000)
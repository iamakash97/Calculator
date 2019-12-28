fs=require('fs');
http=require("http");
url=require("url");
query=require("querystring");
mymodule=require("./module1")

processdata=function(req,resp)
{
d=url.parse(req.url)
switch(d.pathname)
{
	case "/":
	resp.writeHead(200,{'content-Type':'text/html'});
	fs.readFile("form.html",function(error,data)
	{
		if(error)
		{
			resp.end("error")
			
		}
		else
		{
			resp.end(data);
		}
	});
	break;
	case "/operation":
	data=query.parse(d.query);
	resp.writeHead(200,{'content-Type':'text/html'});
	switch(data.p)
	{
		case 'Addition':
		resp.end("<h1 style='color:green'>Addition:"+mymodule.addition(data.num1,data.num2)+"</h1>");
		break;
		
		case 'Substraction':
		resp.end("<h1 style='color:green'>Substraction:"+mymodule.substraction(data.num1,data.num2)+"</h1>");
		break;
		
		case 'Multiplication':
		resp.end("<h1 style='color:green'>Multiplication:"+mymodule.multiplication(data.num1,data.num2)+"</h1>");
		break;
		
		case 'Division':
		resp.end("<h1 style='color:green'>Division:"+mymodule.division(data.num1,data.num2)+"</h1>");
		break;
	}
	
}
}
http.createServer(processdata).listen(4000);
console.log("server is running at 4000");
var gulp = require("gulp"),
    urltool = require("url"),
	webserver = require("gulp-webserver");
	
	gulp.task("default",function(){
		gulp.src(".").pipe(webserver({
			host:"localhost",
			port:"3333",
			middleware:function(req,res,next){
				var urlobj = urltool.parse(req.url,true);
				if(urlobj.pathname==="/getdata"){
					res.end('{"num":"张三丰"}')
				}else if(urlobj.pathname==="/verifycode"){
					
					res.end('{"value":"success"}');				
				}else if (urlobj.pathname==="/login"){
					res.end('{"value":"success"}');	
				}else{
					next();
				}
			}
		}))
		
	})
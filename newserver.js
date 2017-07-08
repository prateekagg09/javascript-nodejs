var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    console.log('req was made' + req.url);
    res.writeHead(300,{'Content-Type':'text/plain'});
    res.end('hey Prateek');
});
server.listen(4000,'127.0.0.1');
console.log('listening');

//var mystream=fs.createReadStream(__dirname+'/readme.txt','utf8');
//var mywstream=fs.createWriteStream(__dirname+'/writeme.txt');

//mystream.pipe(mywstream);
/*var server=http.createServer(function(req,res){
    console.log('req was made' +req.url);
    res.writeHead(300,{'Content-Type':'text/html'});
    var mystream=fs.createReadStream(__dirname+'/index.html','utf8');
    mystream.pipe(res);
});
server.listen(4000,'127.0.0.1');
console.log('listening');*/
/*var server=http.createServer(function(req,res){
    console.log('req was made' +req.url);
    res.writeHead(300,{'Content-Type':'application/json'});
    var obj={
name:'Prateek',
work:'student',
age:'19'
    };
    res.end(JSON.stringify(obj));
});
server.listen(4000,'127.0.0.1');
console.log('listening');*/
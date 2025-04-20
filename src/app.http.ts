import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {

    console.log(req.url)

   // res.writeHead(200, {'Content-Type': 'text/html',})
    //res.write('<h1>Hello World!</h1>');
    //res.end();


   // const data = {"name": "John", "age": 30, "city": "New York"}
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.write(JSON.stringify(data));
    //res.end();

    if ( req.url === '/'){
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8') //es para leer el archivo html
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(htmlFile);
        return
    } 

    if(req.url?.endsWith('.js')){ //si la url termina en .js
        res.writeHead(200, {'Content-Type': 'text/javascript'});  //
    } else if (req.url?.endsWith('.css')){ //si la url termina en .css
        res.writeHead(200, {'Content-Type': 'text/css'});
    }

    const responseConten= fs.readFileSync(`./public${req.url}`, 'utf-8') //es para leer el archivo html
    res.end(responseConten)

})


server.listen(8080, () => {
    console.log('Server is running on port 8080');
})
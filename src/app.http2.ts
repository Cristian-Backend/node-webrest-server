import http2 from 'http2';
import fs from 'fs';
import path from 'path';

const server = http2.createSecureServer({
    key: fs.readFileSync(path.join(__dirname, '../keys/server.key')), //llave privada
    cert: fs.readFileSync(path.join(__dirname, '../keys/server.crt')), //certificado

},(req, res) => {

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

    try {
        const responseConten= fs.readFileSync(`./public${req.url}`, 'utf-8') //es para leer el archivo html
        res.end(responseConten)
    } catch (error) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
        
    }

   

})


server.listen(8080, () => {
    console.log('Server is running on port 8080');
})
import express from "express";
import path from "path"; 
import { envs } from "../config/envs";
const app = express();



//midlewares
app.use(express.json()); // Middleware to parse JSON request bodies

//public folder
app.use(express.static(envs.PUBLIC_PATH)); //archivos estaticos de la carpeta public

app.get('*', (req, res) => { // esto significa que cualquier ruta que no haya sido definida previamente, se redirige a index.html
    const indexPath = path.join(__dirname, '..', envs.PUBLIC_PATH, 'index.html'); 
    res.sendFile(indexPath)
    return
 });


export default app;
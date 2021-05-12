import path from 'path';
import express from 'express';
import apiRoutes from "./routes/api"
import homeRoutes  from './routes/routes';


const  app =express();



app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRoutes);
app.use("/",apiRoutes)

const port = 2500;
app.listen(port, ()=> console.log('Listening on port: ' +port))

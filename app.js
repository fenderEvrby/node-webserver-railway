require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//***********USANDO HABDLEBARS (HBS) */
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Rubén Aquino',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Rubén Aquino',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Rubén Aquino',
        titulo: 'Curso de node'
    })
})

//**********NORMAL */
/*app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Ruta Hola mundo')
})*/

//***********USANDO EXPRES */
/*app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})*/


app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () =>{
    console.log(`Ejemplo corriendo en el puerto ${port}`);
})
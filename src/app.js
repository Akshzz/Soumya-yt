const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicpath = path.join(__dirname, '../public');
app.use(express.static(publicpath));

const hbs_path = path.join(__dirname, '../views');
const partialpath = path.join(__dirname, '../partials');

app.set("views engine", "hbs");
app.set('views', hbs_path);
hbs.registerPartials(partialpath);

const urlgetter =[
    {
        lalisa : "https://www.youtube.com/watch?v=jFrWzVr8cuw&t=2s"

    }
];

app.get('/watch', (req,res) =>{

    
    const url = req.query.video
    res.send(Object.values(urlgetter).find(values => urlgetter[values] = url))

});

app.listen(port, () =>{
    console.log(`Listning to port: ${port}`)
});
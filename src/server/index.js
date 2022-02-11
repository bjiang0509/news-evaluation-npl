const dotenv = require('dotenv'); //allow us to use env variables
dotenv.config()

const path = require('path');
const express =  require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

//set up server
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

const handleFetchApi = async(req, res) => {
    //req.body.apiUrl
    //req.body.url
    const url = `${req.body.apiUrl}key=${process.env.API_KEY}&url=${req.body.url}&lang=en`;
    const response = await fetch(url)
    try{
        const data = await response.json();
        projectData.score_tag = data.score_tag;
        projectData.agreement = data.agreement;
        projectData.subjectivity = data.subjectivity;
        projectData.confidence = data.confidence;
        projectData.irony = data.irony;
        res.send(data)
    }catch(err){
        console.log("err", err);
    }
    
}
app.post('/fetchApi', handleFetchApi);

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const port = 8081;

const listening = () => {
    console.log(`server is running a port ${port}`);
}
const server = app.listen(port, listening);
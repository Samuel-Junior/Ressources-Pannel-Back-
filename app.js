import express from 'express';
import cors  from "cors";

const app = express();

// Cors options 
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
    
});
// API 
app.get("/", (req,res) => {
    res.send('Bienvenue sur le backend de Together.');
});

app.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`);
});

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { login } from './controllers/login.controller.js';
import { deleteUser ,updateUser } from './controllers/users.controller.js';
import { createCollaborator, updateCollaborator, deleteCollaborator } from './controllers/collaborator.controller.js';

const app = express();

// Cors options 
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

mongoose.connect(`mongodb+srv://${process.env.IDENTIFIANT}:${process.env.PASSWORD}@${process.env.BASE_URL_BDD}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=ounissa`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connexion réussie à MongoDB');
}).catch((error) => console.log('Échec de connexion à MongoDB', error));

app.use(bodyParser.json());

// API Routes
app.get('/', (req, res) => {
    res.send('Bienvenue sur le backend de ressource panel.');
});

app.post('/api/login', login);
app.post('/api/collaborator/create', createCollaborator);
app.put('/api/collaborator/:id', updateCollaborator);
app.delete('/api/collaborator/:id', deleteCollaborator);

app.delete('/api/users/:id', deleteUser);
app.put('/api/users/:id', updateUser);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

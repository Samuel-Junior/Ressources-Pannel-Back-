import mongoose from 'mongoose';

// model de mon doc or la base de donnee 
const user = mongoose.Schema({
    email : String,
    nom : String, 
    prenom : String,
    mdp: String
});

export default mongoose.model('user', user)
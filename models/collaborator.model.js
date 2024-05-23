
import mongoose from 'mongoose';

// model de mon doc or la base de donnee 
//{les les valeurs qnd met entre {} c'est des object de type string}aa
// required : true oubliger de remplire la case de formulaire
const collaborator = mongoose.Schema({

    email : {
        type: String,
        required : true
    },
    firstname: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required : true
    },
    age: {
        type: Number,
        required : true
    },
    gender : {
        type: String,
        required : true
    },
    
    status: {
        type: String,
        required : true
    },
    
    goals: {
        type: String,
        required : true
    },
    
});
//exportation 
export default mongoose.model('collaborators', collaborator)


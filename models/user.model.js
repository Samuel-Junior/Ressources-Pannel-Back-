import mongoose from 'mongoose';

// model de mon doc or la base de donnee 
//{les les valeurs qnd met entre {} c'est des object de type string}aa
// required : true oubliger de remplire la case de formulaire
const user = mongoose.Schema({

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
    password : {
        type: String,
        required : true
    },
    role:{
        type:String,
        required:true
    },
});
//exportation 
export default mongoose.model('users', user)


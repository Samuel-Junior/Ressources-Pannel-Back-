import mongoose from 'mongoose';
const projectSchema = mongoose.Schema({

    name : {
        type: String,
        required : true
    },
    idCollaborator: {
        type: [mongoose.Schema.Types.ObjectId],
        ref : 'collaborators'
    },
    startDate: {
        type: String,
        required : true
    },
    endDate : {
        type: String,
        required : true
    },
    programmingLanguage:{
        type:[String],
        required:true
    },
});
//exportation 
export default mongoose.model('Project', projectSchema)
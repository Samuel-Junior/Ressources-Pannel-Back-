import CollaboratorModel from './../models/collaborator.model.js';


export const createCollaborator = async(req , res) => {
console.log(req.body);


try{

    console.log(CollaboratorModel);
    const collaborator = new CollaboratorModel({
        ...req.body
    })
    const response = await collaborator.save()
    res.status(201).json({message:'Collaborateur bien enregistrer'})

     
 }    
 catch(e){
    console.log(e);
     res.status(450).json({message:"enregistrement du collaborateur impossible"})
 }



}
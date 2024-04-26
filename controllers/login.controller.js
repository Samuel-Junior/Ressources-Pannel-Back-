import User from "../models/user.model.js"
import jsonwebtoken from "jsonwebtoken"
// instaler la commande npm install jsonwebtoken

export const login = async (req , res) =>{
   
    try{
        // requette dpour la base de donnee 
       const userFromDb=  await User.findOne({email: req.body.email, password: req.body.password});
       console.log('utilisateur',userFromDb)
       //test si un user est trouver dans la base de donnee
       if(userFromDb){
        //atrebustion d'un token a  l'utulisateur
        const accessToken =jsonwebtoken.sign({user:userFromDb._id},'abcdefghijklmopqrstuvwxyz198273654',{expiresIn:"1d"});
        const refreshToken =jsonwebtoken.sign({user:userFromDb._id},'abcdefghijklmopqrstuvwxyz198273654',{expiresIn:"7d"});
        res.status(200).json({accessToken,refreshToken,message:"utilisateur existe",utilisateur:userFromDb})
        // si le user n'existe pas 
       } else {
        res.status(401).json({message:"utilisateur existe pas"})
       }   
    }
    // si la cnx  a la Base de Donnee n'est pas reussi on affiche le msg d'erreur 
    catch(e){
        res.status(401).json({message:"utilisateur existe pas"})
    }
  
    

}



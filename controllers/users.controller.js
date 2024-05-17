import UserModel from '../models/user.model.js'; // Assurez-vous d'importer votre modèle d'utilisateur

export const deleteUser = async (req, res) => {
    const userId = req.params.id; // Récupère l'ID de l'utilisateur à supprimer depuis les paramètres de l'URL

    try {
        // Recherchez l'utilisateur dans la base de données par son ID et supprimez-le
        const deletedUser = await UserModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            // Si aucun utilisateur n'est trouvé avec cet ID, renvoyer une réponse 404
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        // Si l'utilisateur est supprimé avec succès, renvoyer une réponse 200 avec les détails de l'utilisateur supprimé
        res.status(200).json({ message: "Utilisateur supprimé avec succès", deletedUser });
    } catch (error) {
        // S'il y a une erreur lors de la suppression de l'utilisateur, renvoyer une réponse 500 avec un message d'erreur
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'utilisateur", error });
    }
}

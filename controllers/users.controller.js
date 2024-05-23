import UserModel from '../models/user.model.js'; 

export const deleteUser = async (req, res) => {
    const userId = req.params.id; // Récupère ID du user à supprimer depuis URL

    try {
        // Recherchez l'utilisateur dans BDD par son ID et le delete
        const deletedUser = await UserModel.findByIdAndDelete(userId)// a sincronne

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
export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json({ message: 'Utilisateur mis à jour avec succès', user });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error });
    }
}

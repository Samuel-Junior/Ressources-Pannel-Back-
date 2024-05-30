import CollaboratorModel from './../models/collaborator.model.js';

export const createCollaborator = async (req, res) => {
    try {
        const collaborator = new CollaboratorModel(req.body);
        await collaborator.save();
        res.status(201).json({ message: 'Collaborateur créé avec succès', collaborator });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du collaborateur', error });
    }
};

export const updateCollaborator = async (req, res) => {
    try {
        const collaborator = await CollaboratorModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!collaborator) {
            return res.status(404).json({ message: 'Collaborateur non trouvé' });
        }

        res.status(200).json({ message: 'Collaborateur mis à jour avec succès', collaborator });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du collaborateur', error });
    }
};

export const deleteCollaborator = async (req, res) => {
    try {
        const collaborator = await CollaboratorModel.findByIdAndDelete(req.params.id);

        if (!collaborator) {
            return res.status(404).json({ message: 'Collaborateur non trouvé' });
        }

        res.status(200).json({ message: 'Collaborateur supprimé avec succès', collaborator });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du collaborateur', error });
    }
};

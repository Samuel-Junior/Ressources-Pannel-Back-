import Project from '../models/project.model.js';

export const createProject = async (req, res) => {
    try {
        const { name, idCollaborator, startDate, endDate, programmingLanguage } = req.body;
        const newProject = new Project({
            name,
            idCollaborator,
            startDate,
            endDate,
            programmingLanguage
        });

        await newProject.save();
        res.status(201).json({ message: 'Projet créé avec succès', project: newProject });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du projet', error });
    }
};

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedProject) {
            return res.status(404).json({ message: 'Projet non trouvé' });
        }

        res.status(200).json({ message: 'Projet mis à jour avec succès', project: updatedProject });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du projet', error });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProject = await Project.findByIdAndDelete(id);

        if (!deletedProject) {
            return res.status(404).json({ message: 'Projet non trouvé' });
        }

        res.status(200).json({ message: 'Projet supprimé avec succès', project: deletedProject });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du projet', error });
    }
};

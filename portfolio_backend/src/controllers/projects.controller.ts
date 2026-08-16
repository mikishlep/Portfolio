import { type Request, type Response } from 'express';
import { create, getAll, getById} from "../services/projects.service.js"

export const getProjects = (req: Request, res: Response) => {
    res.json(getAll());
}

export const getProjectById = (req: Request, res: Response) => {
    const id = req.params.id;

    if (isNaN(Number(id))) return res.status(400).json({message: "Invalid id"});

    const project = getById(Number(id))

    if (!project) {
        res.status(404).json({message: "Project not found"});
    } else {
        res.json(project);
    }
}

export const makeProject = (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({message: "Name and description are required"});
    }

    const newProject = create({ name, description });
    res.status(201).json(newProject);
}
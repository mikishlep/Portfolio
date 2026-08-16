import type { CreateProject, Project} from "../interfaces/project.js";

const projects: Project[] = [
    { id: 1, name: 'Project 1', description: 'This is the description of Project 1.' },
    { id: 2, name: 'Project 2', description: 'This is the description of Project 2.' },
    { id: 3, name: 'Project 3', description: 'This is the description of Project 3.' },
];

export const getAll = () => projects;
export const getById = (id: number) => projects.find(project => project.id === id);
export const create = (project: CreateProject) => {
    const newProject = { id: projects.length + 1, ...project };
    projects.push(newProject);
    return newProject;
};
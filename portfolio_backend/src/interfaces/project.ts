export interface Project {
    id: number;
    name: string;
    description: string;
}

export type CreateProject = Omit<Project, "id">;
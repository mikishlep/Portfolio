import express from "express";
import { getProjectById, getProjects, createProject} from "../controllers/projects.controller.js";

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);

router.post('/', createProject);

export default router;
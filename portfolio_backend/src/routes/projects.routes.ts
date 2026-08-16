import express from "express";
import {getProjectById, getProjects, makeProject} from "../controllers/projects.controller.js";

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', makeProject);

export default router;
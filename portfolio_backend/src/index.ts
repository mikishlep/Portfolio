import express, { type Express, type Request, type Response } from 'express';
import router from "./routes/projects.routes.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger-output.json" with { type: "json" };

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Its my portfolio api wow');
});

app.use('/api/projects', router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(6767, () => console.log('Server is running on port 6767'));
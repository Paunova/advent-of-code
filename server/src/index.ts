import express, { Application } from "express";
import cors from "cors";
import routes from "./routes.js";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});

export default app;

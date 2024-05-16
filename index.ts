import express, { Express, Router } from "express";
import dotenv from "dotenv";
import db from "./db";
import routerAuth from "./routes/auth";
import routerOrganizer from "./routes/organizer";
import routerAttendee from "./routes/attendee";
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port : String | Number = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(routerAuth);
app.use(routerOrganizer);
app.use(routerAttendee);



(async () => {
    await db.sync();
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
      });
})();

export default app;
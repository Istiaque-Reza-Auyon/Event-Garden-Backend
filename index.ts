import express, { Express, Router } from "express";
import dotenv from "dotenv";
import db from "./db";
import routerAuth from "./routes/auth";
import routerOrganizer from "./routes/organizer";
import routerAttendee from "./routes/attendee";
import cookieParser from "cookie-parser";

import cors from 'cors';

dotenv.config();

const app: Express = express();
const port : String = process.env.PORT!;

app.use(cors({
  origin: process.env.ORIGIN, 
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(routerAuth);
app.use(routerOrganizer);
app.use(routerAttendee);



(async () => {
    await db.sync();
    app.listen(port, () => {
        console.log(`[server]: Server is running at port:${port}`);
      });
})();

export default app;
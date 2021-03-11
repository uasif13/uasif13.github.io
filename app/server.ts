import { Express, Request, Response } from "express";
import express from "express";
import path from "path";
export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(express.static(path.resolve("./") + "/build/client"));
    this.app.use(express.static(path.resolve("./") + "/build/blog"));

    this.app.get("/api", (req: Request, res: Response): void => {
      res.send("API has started");
    });

    this.app.get("/blog", (req: Request, res: Response): void => {
      res.sendFile(path.resolve("./" + "build/blog/index.html"));
    });
    this.app.get("*", (req: Request, res: Response): void => {
      res.sendFile(path.resolve("./" + "build/client/index.html"));
    });
  }
  public start(port: Number): void {
    this.app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  }
}

import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import "./controllers/tenant.controller";
import { container } from "./libs/di-container";

const bootstrap = async () => {
  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    app.use(express.json());
  });

  const app = server.build();

  app.listen(process.env.PORT ?? 3030, () => {
    console.log("Application Running on 8080");
  });
};

bootstrap();

import { NextFunction, Request, Response } from "express";
export const Authorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization == "Sivasspor") {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
};

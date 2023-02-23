import { Request, Response, NextFunction } from "express";

const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Content-Type", "application/json");
    try {
      await schema.validate(req.body);
      next();
    } catch (err: any) {
      res.status(409).send({
        success: false,
        message: `Validation error - ${err?.message}`,
      });
    }
  };

export default validate;

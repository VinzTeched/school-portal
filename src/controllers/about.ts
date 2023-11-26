import { Request, Response } from "express";

/**
 * About page.
 * @route GET /
 */

export const about = (req: Request, res: Response) => {
  res.render("about", {
    title: "About us",
  });
};

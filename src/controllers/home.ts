import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    res.render("home", {
        title: "Home"
    });
};

export const about = (req: Request, res: Response) => {
  res.render("about", {
    title: "About us",
  });
};

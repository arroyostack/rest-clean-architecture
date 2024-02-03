import { Router } from "express";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.get( "/api/todos", ( req, res ) => {
            res.json( [
                {
                    id: 1,
                    text: "Study Backend.",
                    createdAt: new Date()
                },
                {
                    id: 1,
                    text: "Study Frontend.",
                    createdAt: new Date()
                },
                {
                    id: 1,
                    text: "Study Fullstack.",
                    createdAt: new Date()
                },
            ] );
        } );

        return router;
    }
}
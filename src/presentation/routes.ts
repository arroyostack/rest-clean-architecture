import { Router } from "express";
import { TodoController } from "./todo/controller";
import { TodoRoutes } from "./todo/routes";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        const todoController = new TodoController();

        // Routes from modules.
        router.use( "/api/todos", TodoRoutes.routes );

        return router;
    }
}
import { Router } from "express";
import { TodoController } from "./controller";

export class TodoRoutes {

    static get routes(): Router {

        const router = Router();
        const todoController = new TodoController();

        // We only send here the refe rence of the function since the arguments are the same as Parameters.
        router.get( "/", todoController.getTodos );
        router.get( "/:id", todoController.getTodoById );
        router.post( "/", todoController.createTodo );

        return router;
    }
}
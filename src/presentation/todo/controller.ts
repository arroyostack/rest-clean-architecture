import { Request, Response } from "express";

const todos = [
    { id: 1, text: "Study Backend.", createdAt: new Date() },
    { id: 2, text: "Study Frontend.", createdAt: new Date() },
    { id: 3, text: "Study Fullstack.", createdAt: new Date() }
];

export class TodoController {
    constructor() { }

    public getTodos = ( req: Request, res: Response ) => {
        res.json( todos );
    };

    public getTodoById( req: Request, res: Response ) {
        const id = parseInt( req.params.id );
        const todo = todos.find( todo => todo.id === id );

        if ( isNaN( id ) ) return res.status( 400 ).json( { error: "Id is not a number" } );

        if ( todo ) {
            return res.json( todo );
        } else {
            return res.status( 404 ).json( { error: "This task was not found on database" } );
        }

    }

    public createTodo( req: Request, res: Response ) {
        const { text } = req.body;
        if ( !text ) return res.status( 400 ).json( { error: "Text property is required" } );

        const newTodo = {
            id: Math.floor( Math.random() * Date.now() ),
            text: text,
            createdAt: new Date()
        };

        todos.push( newTodo );

        res.json( newTodo );
    }

    public updateTodo( req: Request, res: Response ) {
        const id = parseInt( req.params.id );
        if ( isNaN( id ) ) return res.status( 404 ).json( { error: "Id property is must be a number." } );


        const todo = todos.find( todo => todo.id === id );
        if ( !todo ) return res.status( 400 ).json( { error: "Taks not found on database." } );
        const { text } = req.body;

        todo.text = text;

        res.json( todo );

    }

    public deleteTodo( req: Request, res: Response ) {
        const id = parseInt( req.params.id );
        if ( isNaN( id ) ) return res.status( 404 ).json( { error: "Id property is must be a number." } );

        const todo = todos.find( todo => todo.id === id );
        if ( !todo ) return res.status( 400 ).json( { error: "Taks not found on database." } );

        todos.filter( todo => todo.id !== id );

        res.json( todos );

    }

}
import express, { Router } from 'express';
import path from 'path';

/**
 * TypeScript code for a server implementation.
 * This code defines a Server class that starts an express server with specified options.
 * The server serves static files from a public folder and handles routes defined by a Router object.
 */

interface Options {
    port: number;
    public_path?: string;
    routes: Router;
}

export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor( options: Options ) {
        const { port, routes, public_path = 'public' } = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }

    async start() {
        // Middleware
        this.app.use( express.json() );
        this.app.use( express.urlencoded( { extended: true } ) );

        // Serve static files from the public folder.
        this.app.use( express.static( this.publicPath ) );

        // Routes
        this.app.use( this.routes );

        // Default route
        this.app.get( "*", ( req, res ) => {
            const indexPath = path.join( __dirname + `../../../${this.publicPath}/index.html` );
            res.sendFile( indexPath );
        } );

        // Start the server
        this.app.listen( this.port, () => {
            console.log( `Server running on port ${this.port}` );
        } );
    }
};
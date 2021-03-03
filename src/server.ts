import * as express from 'express';
import 'dotenv/config';
import routes  from './routes';
import './app/database';

const server = express();

server.set('view engine', 'pug');
server.set('views', __dirname + '/app/views');

server.use(express.json())
server.use(routes);

export default server;
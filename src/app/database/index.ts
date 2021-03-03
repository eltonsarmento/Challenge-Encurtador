import { Sequelize } from 'sequelize-typescript'

import Url from '../models/Url';

class DataBase{

    constructor(){
        this.init();
    }

    private init(){
        new Sequelize({
            database: `${process.env.DB_NAME}`,
            host: `${process.env.DB_HOST}`,
            dialect: 'postgres',
            username: `${process.env.DB_USER}`,
            password: `${process.env.DB_PASS}`,
            models: [Url]
        })
    }
}

export default new DataBase();
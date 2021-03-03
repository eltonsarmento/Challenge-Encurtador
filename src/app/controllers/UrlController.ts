import {Request,Response} from 'express';
import * as cryptoRandomString from 'crypto-random-string';
import Url from '../models/Url';
import * as moment from 'moment-timezone';
import { json } from 'sequelize/types';

class UrlController{

    async show(req:Request,res:Response){
        const {encrypt} = req.params;
        //@ts-ignore
        const url = await Url.findOne({
            where:{
                encrypt,
                situation:'1',
            }
        });
        if(!url){
            return res.status(404).json({"msg": "Nenhum registro encontrado"});
        }

        return res.redirect(url.url)
        
    }

    async create(req:Request,res:Response){

        const {url} = req.body;
     
        const string_random = cryptoRandomString({length:5})

        const start_date = moment().tz('America/Maceio').format();
        const end_date =  moment().tz('America/Maceio').add("3","months").format()

        const urlObj = new Url({  
            encrypt: string_random,
            url:url,
            start_date,
            end_date
        });
        //@ts-ignore
        const {encrypt} = await urlObj.save();

        return res.json({newUrl:`${process.env.APP_URL}:${process.env.APP_PORT}/${encrypt}`});
    }
}

export default new UrlController();
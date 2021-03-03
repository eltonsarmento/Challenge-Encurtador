import { Table, Column, DataType, Model, TableOptions, AutoIncrement, PrimaryKey, Default } from "sequelize-typescript";
import { Optional } from 'sequelize';

const tableOptions: TableOptions = {
    timestamps:false,
    tableName: "url",
    schema: "public",
} as TableOptions

interface UrlAttribute {
    id?:string,
    encrypt:String,
    url:String,
    start_date: Date|String,
    end_date: Date|String,
    situation?:String
}

interface UrlCreationAttributes extends Optional<UrlAttribute, 'id'> {}

@Table(tableOptions)
class Url extends Model<UrlAttribute,UrlCreationAttributes>{

  @AutoIncrement
  @PrimaryKey  
  @Column({
      type:DataType.NUMBER,
  })   
  id:number;

  @Column({ 
    type:DataType.STRING 
  })
  encrypt:string;

  @Column({ 
    type:DataType.STRING 
  })
  url:string;

  @Column({ 
    type:DataType.DATE
  })
  start_date:Date;

  @Column({ 
    type:DataType.DATE 
  })
  end_date:Date;

  @Default(1)
  @Column({ 
    type:DataType.CHAR,
  })
  situation:string;
  
}

export default Url;
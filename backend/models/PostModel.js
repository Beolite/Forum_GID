import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./UserModel.js";

const {DataTypes} = Sequelize;

const Post = db.define('post',{
    uuid:{
        type:DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len:[3,100]
        }
    },
    content :{
        type:DataTypes.TEXT,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    }
},{
    freezeTableName:true
});

User.hasMany(Post);
Post.belongsTo(User,{foreignKey:'userId'})

export default Post;

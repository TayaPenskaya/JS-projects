import { Sequelize, DataType } from 'sequelize-typescript';

const sequelize = new Sequelize(process.env.DB!, process.env.USER!, process.env.PASSWORD!, {
    dialect: 'postgres'
});

const Location = sequelize.define('location', {
    id: {
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    description: DataType.STRING,
    city: DataType.STRING,
    country: DataType.STRING,
    visited: {
        type: DataType.BOOLEAN,
        defaultValue: false
    },
    // date: DataType.DATE
});

export { sequelize };
export default Location;
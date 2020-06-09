"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    dialect: 'postgres'
});
exports.sequelize = sequelize;
const Location = sequelize.define('location', {
    id: {
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    description: sequelize_typescript_1.DataType.STRING,
    city: sequelize_typescript_1.DataType.STRING,
    country: sequelize_typescript_1.DataType.STRING,
    visited: {
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false
    },
});
exports.default = Location;
//# sourceMappingURL=index.js.map
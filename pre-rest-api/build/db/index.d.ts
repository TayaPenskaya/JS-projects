import { Sequelize } from 'sequelize-typescript';
declare const sequelize: Sequelize;
declare const Location: typeof import("sequelize/types").Model;
export { sequelize };
export default Location;

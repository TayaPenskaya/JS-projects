'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv/config");
const app_1 = tslib_1.__importDefault(require("./app"));
const db_1 = require("./db");
const eraseDatabaseOnSync = true;
db_1.sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
    app_1.default.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));
});
//# sourceMappingURL=index.js.map
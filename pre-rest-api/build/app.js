"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const routes_1 = tslib_1.__importDefault(require("./routes"));
const db_1 = tslib_1.__importDefault(require("./db"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(async (req, _res, next) => {
    req.context = db_1.default;
    next();
});
app.use('/locations', routes_1.default.location);
exports.default = app;
//# sourceMappingURL=app.js.map
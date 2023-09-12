"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error' });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;

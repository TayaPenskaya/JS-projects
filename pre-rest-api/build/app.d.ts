declare global {
    namespace Express {
        interface Request {
            context?: any;
        }
    }
}
declare const app: import("express-serve-static-core").Express;
export default app;

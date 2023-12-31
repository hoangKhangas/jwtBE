import express from "express";
import homeController from '../controller/homeController';
import apiController from '../controller/apiController';
import userController from '../controller/userController';
import groupController from '../controller/groupController';
import {checkUserJWT,checkUserPermission} from '../middleware/JWTAction';

const router = express.Router();

/**
 * 
 * @param {*} app express app
 * 
 */
// const testMiddleware =(req, res, next)=>{
    
// }
// const checkUserLogin =(req, res, next) => {
//     const nonSecurePaths = [];
//     if (nonSecurePaths.includes(req.path)) return next();

//     next();
// }

const initApiRoutes = (app) => {
 


//rest api
router.all('*',checkUserJWT,checkUserPermission);
//router.get("/test-api", apiController.testApi);
router.post("/register",apiController.handleRegister);
router.post("/login",apiController.handleLogin);
router.get("/account", userController.getUserAccount);

router.get("/user/read", userController.readFunc);
router.post("/user/create", userController.createFunc);
router.put("/user/update", userController.updateFunc);
router.delete("/user/delete", userController.deleteFunc);

router.get("/group/read", groupController.readFunc);

    return app.use("/api/v1/", router);
}
export default initApiRoutes;
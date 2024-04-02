import  express  from "express";
import {deleteproduct,updateproduct, getproduct, createproduct } from "../handlers/product.js";

const productRouter = express.Router();

productRouter.get('/', getproduct)
productRouter.post('/', createproduct)
productRouter.patch('/', updateproduct)
productRouter.delete('/', deleteproduct)

export default productRouter;
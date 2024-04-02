import express from 'express'
import cors from 'cors'
import productRouter from './routers/product.js';

const app = express();

app.use(cors())

app.use('/product', productRouter)

app.listen(3000, () => 
    console.log("SERVER STARTED")
)

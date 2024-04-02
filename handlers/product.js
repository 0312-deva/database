import { client,connectTodb } from "../database/db.js"
import axios from "axios"


//FIND PRODUCTS
export const getproduct=async(req,res)=>{
    try {
    await connectTodb();

    const database=client.db('products')
    const collection =database.collection('products_info')

    //const findsProc = await collection.findOne({title:"iPhone 9"})
   // res.send(findsProc)
    //console.log(findProcs)

    const findProcs =collection.find({brand: "Apple"})

    let resultFind=[];
   for await(const doc of findProcs){
    resultFind.push(doc)
   }
   res.send(resultFind)    
   console.log(resultFind)
    } catch (error) {
        console.log(error)
        res.send(error) 
    }
}
//CREATE PRODUCTS
export const createproduct=async(req, res)=>{
try {
    await connectTodb();

    const database=client.db('products')
const collection =database.collection('products_info')

    const response = await axios.get(`http://dummyjson.com/products?limit=10`)
    const product = response.data.products

    const insertProd=await collection.insertMany(product)
    res.send(insertProd)
console.log(insertProd)

} catch (error) {
   console.log(error)
   res.send(error) 
}
}
//UPDATE PRODUCT
export const updateproduct=async(req, res)=>{
    try {

        await connectTodb();

const database=client.db('products')
const collection =database.collection('products_info')

const upPro=await collection.updateOne(
   { title:"iPhone 9"},
   {$set:
    {description:"An apple mobile one of the best mobile"}
   },)

res.send(upPro)
console.log(upPro)
        
    } catch (error) {
        
    }
}
 //DELETE PRODUCTS
export const deleteproduct=async(req, res)=>{
    try {
        
        await connectTodb();

        const database=client.db('products')
        const collection =database.collection('products_info')

        const delProd=await collection.deleteOne(
            {title:"OPPOF19"}
        )
        res.send(delProd)
        console.log(delProd)
    } catch (error) {
        
    }
}
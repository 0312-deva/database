
import { MongoClient } from 'mongodb'

//deva3122
const url="mongodb+srv://devadharshini3122002:deva3122@cluster0.fzllgxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(url);

export const connectTodb =async()=>{
    try {
        await client.connect();
        console.log("connection success")
    } catch (error) {
        console.log(error)
    }
} 
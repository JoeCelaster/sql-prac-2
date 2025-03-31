import express from 'express';
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
})

db.connect((err)=>{
    if(err){
        console.log('Error Occurred !', err)
        return
    }
    console.log('Sql connected !')
})

app.get('/', (req,res)=>{
    res.send('Express and mysql connected!')
})

app.listen(PORT, ()=>{
    console.log(`Server runnning on ${PORT}`)
});
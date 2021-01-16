
 const couchbase=require('couchbase')
 const express=require('express')
 const uuid=require('uuid')
 const bodyParser=require('body-parser')
 const bcrypt=require('bcryptjs')
 const cors=require('cors')
  
 const app=express()
  
 app.use(cors())
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))
  
 const cluster=newcouchbase.Cluster('couchbase://localhost',{
   username:'Administrator',password:'password'
 })
 const bucket=cluster.bucket('Strona')
 const collection=bucket.defaultCollection()
  
 const server=app.listen(3000,()=>console.info(`Runningonport${server.address().port}...`))
require ('dotenv').config()
const express = require ('express'),
    {json} = require ('body-parser'),
    app=express(),
    port = process.env.PORT||3001
    massive = require('massive'),
    {getHouses,createHouse,deleteHouse} = require ('./controller'),
    app.use(json());

    massive(process.env.CONNECTION_STRING).then(dbInstance=>{
        app.set('db',dbInstance)
    }).catch(err=>console.log(err))

    app.get('/api/houses', getHouses)
    app.post('/api/houses', createHouse)
    app.delete('/api/houses/:id',deleteHouse)

app.listen(port,()=>console.log('server is listening on port',port))
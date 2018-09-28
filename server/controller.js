module.exports={

getHouses(req,res){
    let db = req.app.get('db')
    db.getHouses().then(houses=>{
        res.status(200).json(houses)
    })
},
createHouse(req,res){
    let db = req.app.get('db');
    const {name,address,city,state,zip,image_url,mortgage,rent} = req.body
    db.createHouse([name,address,city,state,zip,image_url,mortgage,rent]).then(houses=>{
        res.status(200).json(houses)
    })
},
deleteHouse(req,res){
    let db = req.app.get('db');
    const {id} = req.params;
    db.deleteHouse(id).then(houses=>{
        res.status(200).json(houses)
    })
}







}
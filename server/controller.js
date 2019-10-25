module.exports = {
    getHouses: (req,res,next) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).send(houses);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    addHouse: (req,res,next) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip, image, mortgage, rent} = req.body;
        db.add_house([name, address, city, state, zip, image, mortgage, rent]).then(() => {
            res.sendStatus(200);
        }).catch(err => {res.status(500).send(console.log(err))})
    },
    deleteHouse: (req,res,next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_house([id]).then(() => {
            res.sendStatus(200);
        }).catch(err => {res.status(500).send(console.log(err))})
    }
}
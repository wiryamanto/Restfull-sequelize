// const {dbfoods} = require("../models/");
const { foods } = require("../models/");

module.exports = {
    getAllFoods: (req, res) => {

        foods.findAll()
            .then((data) => {
                res.send({
                    msg: "success",
                    status: "200",
                    data
                })
            })
            .catch((err) => {
                res.send({
                    msg: "error",
                    status: "500",
                    err,
                });
            });
    },
    postFoods: (req, res) => {
        let { body } = req;
        foods.create(body)
            .then((data) => {
                res.status(200).send({
                    msg: "success post data",
                    status: "200",
                    data
                })
            })
            .catch((err) => {
                res.status(500).send({
                    msg: "failed while post data",
                    status: 500,
                    err,
                });
            });
    },
    getDataById: (req, res) => {
        let { id } = req.params;
        foods.findOne({
            where: { id }
        })
            .then((data) => {
                res.status(200).send({
                    msg: "Success Get Data By Id",
                    status: 200,
                    data
                })
                    .catch((err) => {
                        res.status(500).send({
                            msg: "Failed While Get Data By Id",
                            status: 500,
                            err,
                        });
                    });
            })
    }, 
    updateFoods: (req, res)=>{
        let {id} = req.params;
        let {body} = req
        foods.update (body, {
            where:{
                id:id
            }
        }).then((data)=>{
            res.status(200).send({
                msg:"succes Update Foods",
                status:200,
                data
            })
        }).catch((err)=>{
            res.status(500).send({
                msg: "Failed Update Foods",
                status:500,
                err,
            })
        })
    },
    deleteFood:(req,res)=>{
        let {id}= req.params;
        foods.destroy({
            where:{
                id:id
            }
        }).then((data)=>{
            res.status(200).send({
                msg: "Success Delete Foods",
                status:200,
                data
            })
        }).catch((err)=>{
            res.status(500).send({
                msg: "Failed Delete Foods",
                status:500,
                err
            })
        })
    }

};

const express = require('express');

const myRouter = express.Router();

const youssef = require('../../models/youssef_2');


myRouter.get('/', async (req, res) => {

    const series = await youssef.find();

    res.json({
        "id" : 6,
        "title" : "مسلسل يوسف الصديق الجزء الثانى" ,
        "backGImg" : "https://i.ytimg.com/vi/i7H2oQH_2e4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCj4zaL8NGyBeUK3pWO-HzoUZS6yg",
        series
    });
});

myRouter.get('/:id', async (req, res) => {

    const series = await youssef.findById(req.params.id);

    res.json(series);
});

//Delete product
myRouter.delete('/:id', async (req, res) => {

    try {
        const series = await youssef.deleteOne({ "_id": req.params.id });

        res.json(series);
    }
    catch (error) {
        console.log(error);
    }
});

myRouter.patch('/:id', async (req, res) => {

    try {
        const series = await youssef.updateOne({ "_id": req.params.id },{"title":req.body.title,"link":req.body.link});

        res.json(series);
    }
    catch (error) {
        console.log(error);
    }
});

myRouter.post('/', (req, res) => {
    const product = youssef({
        title: req.body.title,
        link: req.body.link,
        imgUrl : req.body.imgUrl
    });


    product.save().then((data) => {
        res.status(201).json(
            {
                'message': 'الحلقة اتسجلت',
                'data': data
            }
        );
    });
});


module.exports = myRouter;
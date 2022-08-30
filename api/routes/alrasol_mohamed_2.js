
const express = require('express');

const myRouter = express.Router();

const alrasol_mohamed = require('../../models/alrasol_mohamed_2');


myRouter.get('/', async (req, res) => {

    const series = await alrasol_mohamed.find();

    res.json(
        {
            "id" : 2,
            "title": "مسلسل سيرة رسول الله الجزء الثانى",
            "backGImg" : "https://i.ytimg.com/vi/n641UaR4wpA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB1isIkntZz9DRyFdU1GG-YypQkUQ",
            series
        }
    );
});

myRouter.get('/:id', async (req, res) => {

    const series = await alrasol_mohamed.findById(req.params.id);

    res.json(series);
});

//Delete product
myRouter.delete('/:id', async (req, res) => {

    try {
        const series = await alrasol_mohamed.deleteOne({ "_id": req.params.id });

        res.json(series);
    }
    catch (error) {
        console.log(error);
    }
});

myRouter.patch('/:id', async (req, res) => {

    try {
        const series = await alrasol_mohamed.updateOne({ "_id": req.params.id }, { "title": req.body.title, "link": req.body.link });

        res.json(series);
    }
    catch (error) {
        console.log(error);
    }
});

myRouter.post('/', (req, res) => {
    const product = alrasol_mohamed({
        title: req.body.title,
        link: req.body.link,
        imgUrl: req.body.imgUrl,
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

const express = require('express');

const myRouter = express.Router();

const youssef = require('../../models/youssef');


myRouter.get('/', async (req, res) => {

    const series = await youssef.find();

    res.json({
        "id" : 5,
        "title" : "مسلسل يوسف الصديق الجزء الاول" ,
        "backGImg" : "https://i.ytimg.com/vi/jfLGSGWeTYs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAsgnI0zhh5uWRS0WChwzL4Ayn1Mw",
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
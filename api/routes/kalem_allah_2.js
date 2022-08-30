
const express = require('express');

const myRouter = express.Router();

const kalem_allah = require('../../models/kalem_allah_2');


myRouter.get('/', async (req, res) => {

    const series = await kalem_allah.find();

    res.json(
        {
            "id" : 4 ,
            "title": "مسلسل كليم الله الجزء الثانى",
            "backGImg" : "https://i.ytimg.com/vi/JB-aAvXevKw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8xcS0GIZb_MEXT7i-L0tWJqzuAQ",
            series
        }
    );
});

myRouter.get('/:id', async (req, res) => {

    const series = await kalem_allah.findById(req.params.id);

    res.json(series);
});

//Delete product
myRouter.delete('/:id', async (req, res) => {

    try {
        const series = await kalem_allah.deleteOne({ "_id": req.params.id });

        res.json(series);
    }
    catch (error) {
        console.log(error);
    }
});

myRouter.patch('/:id', async (req, res) => {

    try {
        const series = await kalem_allah.updateOne({ "_id": req.params.id },{"imgUrl":req.body.imgUrl});

        res.json(series);
    }
    catch (error) {
        console.log(error);
    }
});

myRouter.post('/', (req, res) => {
    const product = kalem_allah({
        title: req.body.title,
        link: req.body.link,
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
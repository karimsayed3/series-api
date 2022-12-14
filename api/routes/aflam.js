
const express = require('express');

const myRouter = express.Router();

const alrasol_mohamed = require('../../models/aflam');


myRouter.get('/', async (req, res) => {

    const series = await alrasol_mohamed.find();

    res.json(
        {
            "id" : 8,
            "title": "افلام دينية",
            "backGImg" : "https://i.ytimg.com/vi/twBlhSOl8Hg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpVpiLZwr6wul3vFsvI8kpuPlJtA",
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
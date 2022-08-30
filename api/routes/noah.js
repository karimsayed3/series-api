
const express = require('express');

const myRouter = express.Router();

const noah_1 = require('../../models/noah');


myRouter.get('/', async (req, res) => {

    const series = await noah_1.find();

    res.json(
        {
            "id" : 7,
            "title": "مسلسل نوح",
            "backGImg" : "https://i.ytimg.com/vi/vnGyMnKFKt4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5IX5zP8zAeaRMf_T_OfLQihrMyQ",
            series
        }
    );
});

myRouter.get('/:id', async (req, res) => {

    const series = await noah_1.findById(req.params.id);

    res.json(series);
});

//Delete product
myRouter.delete('/:id', async (req, res) => {

    try {
        const series = await noah_1.deleteOne({ "_id": req.params.id });

        res.json(series);
    }
    catch (error) {
        console.log(error);
    }
});

myRouter.patch('/:id', async (req, res) => {

    try {
        const series = await noah_1.updateOne({ "_id": req.params.id },{"title":req.body.title,"link":req.body.link});

        res.json(series);
    }
    catch (error) {
        console.log(error);
    }
});

myRouter.post('/', (req, res) => {
    const product = noah_1({
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
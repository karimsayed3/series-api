
const express = require('express');

const myRouter = express.Router();

const allSeries = require('../../models/all_series');
const alrasol_mohamed2 = require('../../models/alrasol_mohamed_2');
const alrasol_mohamed = require('../../models/alrasol_mohamed');
const kalem_allah = require('../../models/kalem_allah_1');
const kalem_allah2 = require('../../models/kalem_allah_2');
const youssef = require('../../models/youssef');
const youssef2 = require('../../models/youssef_2');
const noah_1 = require('../../models/noah');

myRouter.get('/', async (req, res) => {

    const allSerie = await allSeries.find();
    const alrasol_mohamed_2 = await alrasol_mohamed2.find();
    const alrasol_mohamed_1 = await alrasol_mohamed.find();
    const kalem_allah_1 = await kalem_allah.find();
    const kalem_allah_2 = await kalem_allah2.find();
    const youssef_1 = await youssef.find();
    const youssef_2 = await youssef2.find();
    const noah1 = await noah_1.find();
    

    res.json(
        allSerie,
        
    );
});

myRouter.get('/:id', async (req, res) => {

    const series = await allSeries.findById(req.params.id);
    res.json([series.seriesName]);
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
    const product = allSeries({
        id : req.body.id,
        title: req.body.title,
        backGImg : req.body.backGImg,
        seriesName: req.body.seriesName,
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
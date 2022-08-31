const mongoose = require('mongoose');

const seriesModel = new mongoose.Schema(
    {
        title : String,
        imgUrl : String,
    }
);


module.exports = mongoose.model('allSeries',seriesModel);
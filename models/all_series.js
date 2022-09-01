const mongoose = require('mongoose');

const seriesModel = new mongoose.Schema(
    {
        title : String,
        id : String,
        backGImg : String,
        seriesName : Array
    }
);


module.exports = mongoose.model('allSeries',seriesModel);
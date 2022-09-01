const mongoose = require('mongoose');

const seriesModel = new mongoose.Schema(
    {
        title : String,
        id : String,
        backGImg : String,
        seriesName : new Object()
    }
);


module.exports = mongoose.model('allSeries',seriesModel);
const mongoose = require('mongoose');

const seriesModel = new mongoose.Schema(
    {
        title : String,
        link : String,
        imgUrl : String,
    }
);


module.exports = mongoose.model('noah_1',seriesModel);
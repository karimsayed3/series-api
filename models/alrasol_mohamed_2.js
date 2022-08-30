const mongoose = require('mongoose');

const seriesModel = new mongoose.Schema(
    {
        title : String,
        link : String,
        imgUrl : String,
    }
);


module.exports = mongoose.model('alrasol_mohamed_2',seriesModel);
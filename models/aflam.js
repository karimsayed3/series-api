const mongoose = require('mongoose');

const seriesModel = new mongoose.Schema(
    {
        title : String,
        link : String,
        imgUrl : String,
    }
);


module.exports = mongoose.model('aflam',seriesModel);
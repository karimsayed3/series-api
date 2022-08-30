const app = require('./app');

const mongoose = require('mongoose');

const cors = require('cors');

const port = process.env.PORT || 8080 ;

app.use(cors());

mongoose.connect('mongodb+srv://karim:lLJxLFTRhKlOUVRX@cluster0.5dwrgrb.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log("connected to mongo!");
    app.listen(port,()=>{
        console.log("server is running on port 8080");
    });
    
});

const mongoose = require('mongoose');

const connectTodb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@cluster0.f1edlg3.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log("MongoDB Connected")
    }).catch((err) => console.log(err));
};

module.exports = connectTodb;
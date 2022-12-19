const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    check:{
        type:Boolean,
        require:true,
    },
    date:{
        type: Date,
        default:Date.now(),
    },
    description:{
        type: String,
        require:true,
    },
});

module.exports = mongoose.model("task", taskSchema)
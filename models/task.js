const mongoos =require('mongoose');
const taskSchema = new mongoos.Schema({
    title:{
        type: String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
});

const Task = mongoos.model('Task',taskSchema);
module.exports = Task;
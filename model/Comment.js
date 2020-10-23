const mongoose  = require('mongoose');

const CommentSchema    = new mongoose.Schema({
    
    text :{
        type :String,
        required :true ,
        max : 255
    },
    author :{
        type :String,
        required :true ,
        max : 255
    },
    parent :{
        type :String,
        required :true ,
        max : 255
    },
    date :{
        type : Date ,
        default : Date.now 
    }
},{
    versionKey: false
}
)

module.exports = mongoose.model('Comment',CommentSchema);
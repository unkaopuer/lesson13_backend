const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const noteSchema = new mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    title:{
        type: String,
        required: true
    },
    text:{
        type:String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false    //默认是false说明是open的状态，也可设成status然后枚举，见下方
    }

    },
    {
        timestamps: true
    }
)

noteSchema.plugin(AutoIncrement,{
    inc_field:'ticket',
    id: 'ticketNums',
    start_seq: 500
})

module.exports = mongoose.model('Note', noteSchema)
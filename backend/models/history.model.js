import mongoose from "mongoose";

const historySchema = new mongoose.Schema({

    dailyDataId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DailyData'
    },
    changedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    oldData: Object,
    newData: Object,
    changedAt: {
        type: Date,
        default: Date.now
    }
})

const DailyModel = mongoose.model("DailyData", dailySchema)
export default DailyModel
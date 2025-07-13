import mongoose from "mongoose";

const dailySchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true,
            unique: true
        },
        data: {
            title: String,
            description: String,

        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    }
)


const DailyModel = mongoose.model("DailyData", dailySchema)
export default DailyModel


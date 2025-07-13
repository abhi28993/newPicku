import DailyData from "../models/DailyData"

// CREATE or UPDATE daily data
const upsertDailyData = async (req, res) => {
    try {
        const { date, data } = req.body;

        const updated = await DailyData.findOneAndUpdate(
            { date: new Date(date) },
            {
                data,
                updatedBy: req.user._id,
                updatedAt: new Date()
            },
            { upsert: true, new: true }
        );

        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ daily data (by date)
const getDailyDataByDate = async (req, res) => {
    try {
        const { date } = req.params;
        const entry = await DailyData.findOne({ date: new Date(date) }).populate('updatedBy', 'name email');
        if (!entry) return res.status(404).json({ message: "No data for this date" });
        res.json(entry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// LIST history of all daily data
const getAllDailyData = async (req, res) => {
    try {
        const all = await DailyData.find().sort({ date: -1 }).populate('updatedBy', 'name');
        res.json(all);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE entry by date
const deleteDailyDataByDate = async (req, res) => {
    try {
        const { date } = req.params;
        await DailyData.findOneAndDelete({ date: new Date(date) });
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Export all functions
module.exports = {
    upsertDailyData,
    getDailyDataByDate,
    getAllDailyData,
    deleteDailyDataByDate
};

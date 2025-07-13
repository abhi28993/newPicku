const express = require('express');
const router = express.Router();
const {
  upsertDailyData,
  getDailyDataByDate,
  getAllDailyData,
  deleteDailyDataByDate
} = require('../controllers/dailyDataController');
const { authenticate, adminOnly } = require('../middleware/auth');

// Admin routes
router.post('/', authenticate, adminOnly, upsertDailyData);
router.delete('/:date', authenticate, adminOnly, deleteDailyDataByDate);

// Public/Admin route
router.get('/history', authenticate, getAllDailyData);
router.get('/:date', authenticate, getDailyDataByDate);

module.exports = router;
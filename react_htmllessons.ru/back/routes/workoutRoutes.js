import express from 'express'
import { AddNewWorkout } from '../controllers/workout/workoutController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, AddNewWorkout)

export default router

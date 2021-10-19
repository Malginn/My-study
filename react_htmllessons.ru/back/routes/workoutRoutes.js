import express from 'express'
import { AddNewWorkout, getWorkout } from '../controllers/workout/workoutController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, AddNewWorkout)
router.route('/:id').get(protect, getWorkout)

export default router
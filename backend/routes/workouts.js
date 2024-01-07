// using the express router to get access to the app.
const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// get all workouts
router.get('/',getWorkouts)

// get a single workout
router.get('/:id',getWorkout)

// post a new workout
router.post('/',createWorkout)

// DELETE a workout
router.delete('/:id',deleteWorkout)

// Update a workout
router.patch('/:id',updateWorkout)

module.exports = router

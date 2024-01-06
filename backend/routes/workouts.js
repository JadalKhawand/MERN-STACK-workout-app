// using the express router to get access to the app.
const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()
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

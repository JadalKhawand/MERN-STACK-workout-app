import { UseWorkoutsContext } from "../hooks/UseWorkoutsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = UseWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      {/* suffix is only to add the word ago. */}
      <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p> 
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails

// eslint-disable-next-line react/prop-types
export const Total = ({course}) => {

  // eslint-disable-next-line react/prop-types
  const totalExercises = course.parts.reduce((acc, part) => acc + part.exercises, 0)
  
  return (
    <div> 
      <h3>
       total of {totalExercises} exercises
      </h3>
         
    </div>
  )
  }
       
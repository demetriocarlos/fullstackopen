
 import { Header } from "./Header"
import { Content } from "./Content"
import { Total } from "./Total"

// eslint-disable-next-line react/prop-types
export const Course = ({course}) => {
  return (
    <div>
        <Header course={course} />
        { 
        course.parts.map((parts)=>(
                      <div key={parts.id}>
                          <Content  parts={parts} />
                      </div>
                  ))
        }

<Total  course={course}/>
    </div>
  )
}

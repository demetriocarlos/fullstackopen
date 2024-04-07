
 

// eslint-disable-next-line react/prop-types
export const Persons = ({persons}) => {
  return (
    <div> 
      {
      // eslint-disable-next-line react/prop-types
      persons.map((nombres) => (
        <div key={nombres.id}>
          <p>{nombres.name} : {nombres.number}</p>
          
        </div>
      ))
      }
    </div>
  )
}

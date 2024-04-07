

// eslint-disable-next-line react/prop-types
export const PersonForm = ({addName,newName,handleNoteChange,newNumber, handleNumberChange}) => {
     

  return (
    <div>
        <form  onSubmit={addName}>
        <div>
          name: <input value={newName}  onChange={handleNoteChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

import React, {useState} from 'react'

function SushiWallet({addToBudget}) {
  const [formAmt, setFormAmt] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    addToBudget(formAmt)
    setFormAmt(0)
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Add more money: 
            <input type="number" value={formAmt} onChange={(e)=>setFormAmt(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}


export default SushiWallet
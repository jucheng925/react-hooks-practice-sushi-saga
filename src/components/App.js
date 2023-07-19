import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([])
  const [displaySushis, setDisplaySushis] = useState([])
  const [numOfClick, setNumofClick] = useState(4)
  const [budget, setBudget] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      const allSushis = data.map(sushi => {
        return {...sushi, eaten: false}})
      setSushiData(allSushis)
      const fourSushi = allSushis.slice(0,4)
      setDisplaySushis(fourSushi)
    })
  }, [])

  function getSushi() {
    setNumofClick(numOfClick + 4)
    const fourSushi = sushiData.slice(numOfClick, numOfClick + 4)
    setDisplaySushis(fourSushi)
  }

  function eatSushi(e) {
    const targetSushi = displaySushis.find(s=> (parseInt(e.target.id) === s.id))
    if (budget - (targetSushi.price) >= 0) {
    const newDisplay = displaySushis.map(s => (parseInt(e.target.id) === s.id) ? {...s, eaten: true} : s)
    const newAllSushis = sushiData.map(s => (parseInt(e.target.id) === s.id) ? {...s, eaten: true} : s)
    setDisplaySushis(newDisplay)
    setSushiData(newAllSushis)
    const newBudget = budget - (targetSushi.price)
    setBudget(newBudget)
  }}

  return (
    <div className="app">
      <SushiContainer displaySushis={displaySushis} eatSushi={eatSushi} getSushi ={getSushi}/>
      <Table sushiData={sushiData} budget={budget}/>
    </div>
  );
}

export default App;

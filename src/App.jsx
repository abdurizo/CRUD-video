import "./index.css";
import { useState } from "react";
import { Info, SearchPanel, Filter, EmployersList, EmployersAddForm } from './components'

function App() {
  // const [increase, setIncrease] = useState(false);
  const data=[
    { name: 'John', salary: 800,  id:1 },
    { name: 'Alex', salary: 5000,  id:2 },
    { name: 'Gloriya', salary: 1000,  id:3 },
  ]

  return (
    <div className="container">
      <Info />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
      <EmployersList data={data} />
      <EmployersAddForm/>
    </div>
  )
}

export default App

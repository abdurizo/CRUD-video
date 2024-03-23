import "./index.css";

import { Info, SearchPanel, Filter, EmployersList, EmployersAddForm } from './components'

function App() {

  const data=[
    { name: 'John', salary: 800, increase:true},
    { name: 'Alex', salary: 5000, increase:false},
    { name: 'Gloriya', salary: 1000, increase:true},
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

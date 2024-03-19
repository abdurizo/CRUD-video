import "./index.css";

import { Info, SearchPanel, Filter, EmployersList, EmployersAddForm } from './components'

function App() {

  return (
    <div className="container">
      <Info />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
      <EmployersList/>
      <EmployersAddForm/>
    </div>
  )
}

export default App

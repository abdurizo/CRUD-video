import "./index.css";

import { Info, SearchPanel, Filter } from './components'

function App() {

  return (
    <div className="container">
      <Info /> 
      <div className="search-panel">
        <SearchPanel/>
      <Filter/>
      </div>
    </div>
  )
}

export default App

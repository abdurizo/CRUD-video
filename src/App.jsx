import { Component } from "react";

import "./index.css";

import { Info, SearchPanel, Filter, EmployersList, EmployersAddForm } from './components'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John', salary: 800, id: 1 },
        { name: 'Alex', salary: 5000, id: 2 },
        { name: 'Gloriya', salary: 1000, id: 3 },
      ]
    }
    this.maxId = 4
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex(elem => elem.id === id)
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after]; или
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
  hendleAddItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return{
        data:newArr
      }
    })
  }
  render() {
    return (
      <div className="container" >
        <Info />
        <div className="search-panel">
          <SearchPanel />
          <Filter />
        </div>
        <EmployersList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployersAddForm onAdd={this.hendleAddItem}/>
      </div>
    )
  }
}

export default App

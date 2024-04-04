import { Component } from "react";

import "./index.css";

import { Info, SearchPanel, Filter, EmployersList, EmployersAddForm } from './components'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John', salary: 800, rise: false, increase: false, id: 1 },
        { name: 'Alex', salary: 5000, rise: false, increase: false, id: 2 },
        { name: 'Gloriya', salary: 1000, rise: false, increase: false, id: 3 },
      ],
      term: '',
      filter: 'all',
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
  handleAddItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }
  onToggleProp = (id, prop) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //   return {
    //     data: newArr
    //   }
    // })
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  onUpdateSearch = (term) => {
    this.setState({ term });
  }
  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
        default:
          return items
    }
  }
  onFilterSelect = (filter) => {
    this.setState({filter});
  }
  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increase = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
    return (
      <div className="container" >
        <Info employees={employees} increase={increase} />
        <div className="search-panel">
          <SearchPanel onUdateSearch={this.onUpdateSearch} />
          <Filter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployersAddForm onAdd={this.handleAddItem} />
      </div>
    )
  }
}

export default App

import { Component } from 'react';
import './EmployersListItem.css';

class EmployersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false
    }
  }
  onIcrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase
    }))
  }
  onRise = () => {
    this.setState(({ rise }) => ({
      rise: !rise
    }))
  }

  render() {
    const { name, salary, } = this.props;
    const { increase, rise } = this.state;

    let className = 'list-group-item d-flex justify-content-between';
    if (increase) {
      className += ' increase'
    }
    if (rise){
      className += ' like'
    }


    return (
      <li className={className} >
        <span 
          className='list-group-item-label'
          onClick={this.onRise}
        >{name}</span>
        <input type="text"
          className="list-group-item-input" defaultValue={salary + '$ '} />
        <div className='d-flex justify-content-center align-items-center'>

          <button type="button"
            className="btn-cookie btn-sm"
            onClick={this.onIcrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
            className="btn-trash btn-sm ">
            <i className="fas fa-trash" ></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default EmployersListItem

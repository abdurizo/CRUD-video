import { Component } from 'react';
import './SearchPanel.css'
class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  handleUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUdateSearch(term);
  }
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.handleUpdateSearch}
      />
    )
  }
}

export default SearchPanel

import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSearchBarInput(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2 search-bar">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Search!</button>
          </span>
        </form>
      </div>
    );
  }
};

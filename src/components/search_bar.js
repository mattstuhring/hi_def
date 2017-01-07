import React, { Component } from 'react';
import {Button, Collapse, Well} from 'react-bootstrap/lib';


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
      <div className="container-fluid search-bar">
        <div className="row search-inline">
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
            click
          </Button>
          <Collapse in={this.state.open}>
            <div>
              <Well>
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
              </Well>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
};

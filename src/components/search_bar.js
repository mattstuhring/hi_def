import React, { Component } from 'react';
import {Button, Collapse, Well, Glyphicon, Image, Col} from 'react-bootstrap/lib';

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
        <div className="row">
          <Col xs={2}>
            <Image className="logo" src="/style/img/logo.jpg" />
          </Col>
          <Col xs={8}>
          <Collapse in={this.state.open}>
            <div xs={8}>
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
                    <button className="btn btn-primary search-btn" type="submit"><Glyphicon glyph="search" /></button>
                  </span>
                </form>
              </Well>
            </div>
          </Collapse>
          </Col>
          <Col xs={1} xsPush={1} className="search-globe-padding">
          <Button
            onClick={ ()=> this.setState({ open: !this.state.open })}
            className="search-btn-globe"
          >
            <Glyphicon glyph="globe" className="search-glyph-globe"/>
          </Button>
          </Col>
        </div>
      </div>
    );
  }
};

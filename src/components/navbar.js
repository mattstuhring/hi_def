import React from 'react';
import {Navbar, FormGroup, FormControl, Button, Col} from 'react-bootstrap/lib';
import SearchBar from './search_bar';

const TopNavbar = (props) => {
  const onSearchBarInput = props.onSearchBarInput;

  return (
    <Navbar fixedTop={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Brand</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <SearchBar onSearchBarInput={onSearchBarInput} />
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;

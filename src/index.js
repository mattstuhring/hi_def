import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Video from './components/video';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBshkLdJ30M0o9GduqxQ-oSqj2OpFBDFFk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      videos: []
    };

    YTSearch({key: API_KEY, term: 'soccer'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Video videos={this.state.videos} />
        <div className="row">
          <div className="page-header col-md-12">
            <h1>More Videos</h1>
          </div>
        </div>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));

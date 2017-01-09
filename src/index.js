import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import SearchBar from './components/search_bar';
import Video from './components/video';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBshkLdJ30M0o9GduqxQ-oSqj2OpFBDFFk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Manchester United');
    this.videoSearch = this.videoSearch.bind(this);
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchBarInput={this.videoSearch} />
        <Video video={this.state.selectedVideo} />
        <div className="video-list">
          <Header />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));

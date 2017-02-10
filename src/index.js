import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Footer from './components/footer';
import Header from './components/header';
import SearchBar from './components/search_bar';
import Video from './components/video';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBshkLdJ30M0o9GduqxQ-oSqj2OpFBDFFk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      pageToken: '',
      term: ''
    };

    this.videoSearch('Manchester United');
    this.videoSearch = this.videoSearch.bind(this);
    this.moreVideos = this.moreVideos.bind(this);
  }

  videoSearch(term) {
    const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
    const params = {
      part: 'snippet',
      maxResults: 12,
      key: API_KEY,
      q: term,
      type: 'video'
    };

    axios.get(ROOT_URL, { params: params })
      .then((res) => {
        this.setState({ videos: res.data.items });

        const videos = res.data.items;
        const initialVideo = res.data.items[0];
        const pageToken = res.data.nextPageToken;

        this.setState({
          videos: videos,
          selectedVideo: initialVideo,
          pageToken: pageToken,
          term: term
        });

      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  moreVideos() {
    const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
    const params = {
      part: 'snippet',
      maxResults: 12,
      key: API_KEY,
      q: this.state.term,
      pageToken: this.state.pageToken,
      type: 'video'
    };

    axios.get(ROOT_URL, { params: params })
      .then((res) => {
        this.setState({ videos: res.data.items, pageToken: res.data.nextPageToken });
      })
      .catch((err) => {
        throw err;
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchBarInput={this.videoSearch} />
        <Video video={this.state.selectedVideo} />
        <div className="video-list">
          <Header nextPage={this.moreVideos} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </div>
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));


import _ from 'lodash';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YTSearch from 'youtube-api-search';

const YOU_TUBE_API_KEY = 'AIzaSyBeAFLnJbxZYJcNbgPfkz1bBmr5KGvuTqs';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
        };
        this.videoSearch('reactjs');
    }

    videoSearch(term) {
        YTSearch({key: YOU_TUBE_API_KEY, term}, videos => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }

    render() {
        const videoSearch = _.debounce(term => this.videoSearch(term), 300);

        return (
            <div>
                <h3>Hi!</h3>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
            </div>
        );
    }

}

export default App;
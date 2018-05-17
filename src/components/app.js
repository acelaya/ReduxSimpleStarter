import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YTSearch from 'youtube-api-search';

const YOU_TUBE_API_KEY = 'AIzaSyBeAFLnJbxZYJcNbgPfkz1bBmr5KGvuTqs';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        YTSearch({key: YOU_TUBE_API_KEY, term: 'reactjs'}, videos => {
            this.setState({ videos });
        });
    }



    render() {
        return (
            <div>
                <h3>Hi!</h3>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }

}

export default App;
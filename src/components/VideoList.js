import React from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends React.Component {
    render() {
        const videoItems = this.props.videos.map(video => (
            <VideoListItem video={video} key={video.etag} />
        ));

        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
    }
}

export default VideoList;

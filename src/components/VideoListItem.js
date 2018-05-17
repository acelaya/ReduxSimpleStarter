import React from 'react';

class VideoListItem extends React.Component {
    render() {
        const { video, onVideoSelect } = this.props;
        const imageUrl = video.snippet.thumbnails.default.url;

        return (
            <li className="list-group-item" onClick={() => {onVideoSelect(video)}}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            <p>{video.id.videoId}</p>
                            <p>{video.snippet.title}</p>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;

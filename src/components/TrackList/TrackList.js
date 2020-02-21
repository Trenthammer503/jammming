import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <li key={track.id}>{track.name}{track.artist}{track.album}</li>
                    })
                }
            </div>
        );
    }
};

export default TrackList;
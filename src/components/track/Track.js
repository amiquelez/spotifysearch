import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../store/actions';
import Error from '../../shared/error/Error';
import Spinner from '../../shared/spinner/Spinner';

class Track extends Component {

    componentDidMount(){
        this.props.fetchTrackInfo(this.props.match.params.id);
    }

    render(){
        let trackContent = <Error type="TRACK_INFO" />
        if(!this.props.error){
            trackContent = (
                <div className="content-box">
                    <div className="img_content">
                        <img src={this.props.image} alt={this.props.trackName} />
                    </div>
                    <div className="info">
                        <h4>{this.props.trackName}</h4>
                        <p>{this.props.artistName.join(", ")}</p>
                        <span>{this.props.albumName}</span>
                        <div className="audio">
                            <audio controls name="media">
                                <source src={this.props.trackSource} type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>
            );
        }
        if(this.props.loading){
            trackContent = <Spinner />
        }

        return trackContent;
    }
}

const mapStateToProps = state => {
    return {
        trackName: state.track.trackName,
        artistName: state.track.artistName,
        albumName: state.track.albumName,
        image: state.track.image,
        trackSource: state.track.trackSource,
        loading: state.track.loading,
        error: state.track.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTrackInfo: (id) => dispatch(action.fetchTrackInfo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
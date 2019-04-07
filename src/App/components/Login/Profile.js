import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Song from '../Songs/Song';
import Album from '../Albums/Album';


class Profile extends Component {
    render() {
        return <>
                <h1>Welcome, {this.props.user.name}</h1>
                {this.props.user.songs.length > 0 ? <h2>Recently played</h2> : '' }
                <ul className="list-group">
                  {this.props.songs.list.map(song => {
                    return this.props.user.songs.includes(song.id) ? 
                            <Song song={song} 
                                  history={this.props.history}  
                                  location={this.props.location}
                                  match={this.props.match} />: '';
                  })}
                </ul>

                {this.props.user.albums.length > 0 ? <h2>Recently visited</h2> : '' }
                <div className="card-columns">
                  {this.props.albums.list.map(album => {
                    return (
                      this.props.user.albums.includes(album.id) ? 
                      <Fragment key={album.id}>
                          <div className="card">
                            <Album album={album} 
                                  history={this.props.history}  
                                  location={this.props.location}
                                  match={this.props.match} />
                          </div>
                        </Fragment> : ''
                      );
                  })}
                </div>
                </>
    }
  }

const mapStateToProps = (state/*, otherProps */) => {
  console.log('song state', state);
  return {
    ...state,
  }
}
   
export default connect(
    mapStateToProps,
    () => ({}),
)(Profile);
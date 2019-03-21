import React, { Component } from 'react';

class Albums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            albums: []
        }
    }
        
    async componentDidMount() {
        try {
            const res = await fetch('/albums');
            const json = await res.json();
            this.setState((prevState) => ({
            ...prevState,
            loading: false,
            albums: json
            }));
        } catch(err) {
            console.error("Error accediendo al servidor", err);
        }
    }

    render() {
        return <div>
            Álbums: muestra los distintos álbums disponibles.

            { this.state.loading ?
                <p>Cargando...</p>
                : 
                <ul>
                {this.state.albums.map(album => <li key={album.id}>{album.name}</li>)}
                </ul>
            }

            <div>
                
            </div>
    </div>
    }
}

export default Albums;
import React, { Component } from 'react';
import './Artist.scss';

class Artirst extends Component {
    
    state = {
        image: '',
        imageWidth: null,
        name: '',
        genres: []
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.getArtist(id);
    }

    async getArtist(id){
        const url = `https://api.spotify.com/v1/artists/${id}`;
        const token = 'BQA308cA8jsk3C3FeZtCzgZDuOdkPD8KeMa6IfrA6h6DyZf379bsceJg5PBu2zouMBvTo5ZNRU_uLRbvV1XtW7krK2NlQjmDco5gtYbKh82uT7ptuupSRmr5V1dGNb9nS_94yvmu47312hPk';
        try{
            const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` }});
            const data = await response.json();
            this.setState({ image: data.images[2].url, imageWidth: data.images[2].width, name: data.name, genres: data.genres });
        }catch(error) {
            console.log(error)
        }
    }

    render(){
        return (
            <div className="artist-content">
                <img src={this.state.image} alt={this.state.name} style={{ width: this.state.imageWidth }} />
                <div className="info">
                    <h2>{this.state.name}</h2>
                    <ul>
                        {this.state.genres.map((gender, index) =>{
                            return <li key={index}>{gender}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Artirst;
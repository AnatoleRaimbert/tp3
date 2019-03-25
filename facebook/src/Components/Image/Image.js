import React, { Component } from 'react';
import "./Image.css";

class Image extends Component {
    render() {
        const { image } = this.props;
        const { src, alt } = image;

        return (
            <div className="tweet-image-container">
                <img src={src} alt={alt}/>
            </div>
        );
    }
}


export default Image;
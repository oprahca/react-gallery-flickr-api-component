import React from "react";
import NotFound from './NotFound';

const Photo = (props) => {
    const flickrTitle = props.title;

    return (
        <div>
            <li>
                <img src={props.url} alt={props.title} title={props.title} />
            </li>
            <p>{flickrTitle}</p>
        </div>
    )
}

const PhotoContainer = (props) => {
    const results = props.data;
    let images;

    if (results.length) {
        console.log(results);
        images = results.map(photo => 
            
            <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} title={photo.title} />
        )
    } else {
        images = <NotFound />
    }

    return (
        <ul>
            {images}
        </ul>
    )
}

export default PhotoContainer;
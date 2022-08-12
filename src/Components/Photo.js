import React from 'react';

const Photo = (props) => {
    const flickrTitle = props.title;
    let photoTitle = '';

    if(flickrTitle.length > 25) {
        photoTitle = (props.title.substring(0,22) + '...');
    } else {
        photoTitle = flickrTitle;
    }

    return (
        <div>
            <li>
                <img src={props.url} alt={props.title} title={props.title} />
            </li>
            <p>{photoTitle}</p>
        </div>
    )
}

export default Photo;
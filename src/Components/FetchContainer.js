import React, { useState } from 'react';
import axios from 'axios';
import PhotoContainer from './PhotoContainer';
import { useEffect } from 'react';

const api_key = 'ca370d51a054836007519a00ff4ce59e';

export default function FetchContainer(props) {
    const [ data, setData] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${props.query}&size=q&per_page=16&format=json&nojsoncallback=1`)
        .then(res => {
            setData(res.data.photos.photo);
            setLoading(false);
        })
        .catch(err => console.log('Error fetching and parsing data', err))
    })

    return (
        <div id="result">
            <div className='photo-container'>
                {
                    loading ? <p>Loading</p> : <PhotoContainer data={data} />
                }
            </div>
        </div>
    )
}

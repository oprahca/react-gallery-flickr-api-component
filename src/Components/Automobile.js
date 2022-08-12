import React from 'react';
import FetchContainer from './FetchContainer';

// query value pass by props from App
const Automobile = (props) => (
    <div>
        <h3>{props.query} Imagegs</h3>
        <FetchContainer query={props.query} />
    </div>
)

export default Automobile;
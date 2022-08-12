import React from 'react';
import FetchContainer from './FetchContainer';

// query value pass by props from App
const Airplane = (props) => (
    <div>
        <h3>{props.query} Image</h3>
        <FetchContainer query={props.query} />
    </div>
)

export default Airplane;
import React from 'react';
function Functionprops(props){
    return(
        <div>
            <h4>Functional component</h4>,
            <h4>Hello {props.name} from {props.place} welcome to our project.</h4>
        </div>
    );
}
export default Functionprops;
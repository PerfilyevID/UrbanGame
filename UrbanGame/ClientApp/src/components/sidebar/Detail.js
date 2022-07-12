import React from 'react';

function Detail(props) {
    return (
        <div checked={props.checked === props.index} onClick={() => props.setChecked(props.index)} style={{ width: `${props.width - 0.2}rem` }} className='detail'>
            <span className="material-icons"> add </span>
            {props.checked === props.index && <span id="selected" style={{ width: `${props.width - 0.2}rem` }} className="material-icons"> done </span>}
        </div>
    );
}

export default Detail;
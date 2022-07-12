import React from 'react';
import PatternButton from './PatternButton'

function PatternPicker(props) {
    return (
        <div id='patternpicker'>
            <p style={{ position: 'relative', color: 'white', marginBottom: '0rem', marginTop:'-0.5rem' }}> Выберите паттерн: </p>
            <div id='roll'>
                {props.pattern.collection.map(p => {
                    return (<PatternButton key={props.pattern.collection.indexOf(p)} index={props.pattern.collection.indexOf(p)} pattern={props.pattern} setPattern={props.setPattern} />);
                }) }
            </div>
        </div>
    );
}

export default PatternPicker;
import React from 'react';
import { Button } from 'reactstrap';

function PatternButton(props) {
    return (
        <Button onClick={() => props.setPattern({ ...props.pattern, selectedIndex: props.index })} color='light' outline={props.pattern.selectedIndex !== props.index} style={{ margin: '0.2rem', width: '3rem', height: '3rem', padding: '0rem', verticalAlign: 'center' }}>
            <span style={{ verticalAlign: 'center' }} className="material-icons"> texture </span>
        </Button>
    );
}

export default PatternButton;
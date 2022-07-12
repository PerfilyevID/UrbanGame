import React, { useState } from 'react';
import { Button } from 'reactstrap';

function ActionBar(props) {
    return (
        <a id='actionbar'>
            <Button disabled outline color='success' style={{ marginRight: '0.2rem' }}>Сохранить</Button>
            <Button color='dark' style={{ marginLeft: '0.2rem' }}>Отмена</Button>
        </a>
    );
}

export default ActionBar;
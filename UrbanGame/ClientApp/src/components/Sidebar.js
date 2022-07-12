import React from 'react';
import DetailPicker from './sidebar/DetailPicker';
import StyleEditor from './sidebar/StyleEditor';

function Sidebar(props) {
    return (
        <div id='sidebar'>
            <DetailPicker pattern={props.pattern} />
            <StyleEditor />
        </div>
    );
}

export default Sidebar;
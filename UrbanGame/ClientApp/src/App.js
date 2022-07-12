import React, { useState } from 'react';
import Editor from './components/Editor';
import ActionBar from './components/editor/ActionBar';
import PatternPicker from './components/editor/PatternPicker';
import Sidebar from './components/Sidebar';
import './custom.css';

function App(props) {
    const [pattern, setPattern] = useState({
        collection: [
            [10, 5, 5, 5, 5, 5, 10, 5],
            [5, 10, 5, 10, 10, 5, 10, 5]
        ],
        selectedIndex: -1
    });
    return (
        <div>
            <Editor />
            <PatternPicker pattern={pattern} setPattern={setPattern} />
            <Sidebar pattern={pattern} />
            <ActionBar />
        </div>
    );
}

export default App;
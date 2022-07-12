import React, { useState } from 'react';
import Detail from './Detail';

function DetailPicker(props) {
    const [checked, setChecked] = useState(-1);
    const getSize = (i) => {
        return props.pattern.collection[props.pattern.selectedIndex][i];
    }

    return (
        <div id='sideelement'>
            <p style={{ position: 'absolute' }}>Наполнение паттерна:</p>
            {props.pattern.selectedIndex > -1 && (
                <div id='grid'>

                    <div>
                        <Detail index={0} setChecked={setChecked} checked={checked} width={getSize(0)} />
                        <Detail index={1} setChecked={setChecked} checked={checked} width={getSize(1)} />
                        <Detail index={2} setChecked={setChecked} checked={checked} width={getSize(2)} />
                        <Detail index={3} setChecked={setChecked} checked={checked} width={getSize(3)} />
                    </div>
                    <div>
                        <Detail index={4} setChecked={setChecked} checked={checked} width={getSize(4)} />
                        <Detail index={5} setChecked={setChecked} checked={checked} width={getSize(5)} />
                        <Detail index={6} setChecked={setChecked} checked={checked} width={getSize(6)} />
                        <Detail index={7} setChecked={setChecked} checked={checked} width={getSize(7)} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailPicker;
import React from 'react'
import './Split.css'



function Split(props) {
    const combinedClassName = `split ${props.className}`;
    let flexBase = { flex: props.flexBasis };
    return (
        <div
            className={combinedClassName}
            style={flexBase}
        >
            {props.children}
        </div>
    );
}

export default Split;
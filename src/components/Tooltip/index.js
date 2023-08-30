import React from 'react';
import ReactTooltip from 'react-tooltip';

function Tooltip({ children, id, options }) {
    const { position, className, effect, offset, delayHide = 0, delayShow = 100 } = options;
    return (
        <ReactTooltip id={id} place={position} offset={offset} delayShow={delayShow} delayHide={delayHide} effect={effect} type="light" className={className}>
            {children}
        </ReactTooltip>
    );
}

export default Tooltip;

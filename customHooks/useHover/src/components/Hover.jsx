import React from "react";
import useHover from '../hooks/useHover'

const Hover = () => {
    const ref = React.useRef();
    const isHovering = useHover(ref);

    console.log(isHovering);

    return (
        <div ref={ref} style={{ width: 300, height: 300, backgroundColor: isHovering ? 'red' : 'blue', transition: '0.5s' }}>
            <button onClick={() => console.log(ref.current)}>Click me</button>
        </div>
    )
}

export default Hover;
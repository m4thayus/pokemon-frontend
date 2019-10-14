import React, { useState } from "react"

function ListContainer(props){
    const [count, setCount] = useState(0)

    return (
        <React.Fragment>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </React.Fragment>
    )
}

export default ListContainer
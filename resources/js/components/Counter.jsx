import { useEffect, useState } from 'react';
import { apiCalls } from '../services'

export default function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        apiCalls.fetchCount()
            .then((res) => {
                setCount(res.data)
            })
    }, [])
    
    function handleClick() {
        return apiCalls.addCount()
            .then((res) => {
                setCount(res.data)
            })
    }

    return <div className="container">
        <div className="row my-5">
            <div className="panel-bg col-md-8 mx-auto d-flex flex-column align-items-center">
                <h1 className="text-color-headings">{count}</h1>
                <br />
                <button className="btn btn-primary" onClick={handleClick}>Click Me!</button>
            </div>
        </div>
    </div>;
}

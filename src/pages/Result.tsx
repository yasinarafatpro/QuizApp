import React from 'react'
import { useLocation } from 'react-router-dom'

const Result:React.FC = () => {

    const {state}=useLocation()



    return (
        <div>
            <p>Result Page</p>
            <h3>Currect Ans : {state}</h3>
        </div>
    )
}

export default Result

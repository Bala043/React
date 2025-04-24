import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError()
    return (
        <div className="errorContainer">
            <div className="errorDetails">
                <div className="errorIcon">⚠️</div>
                <h3>{err?.status}</h3>
                <h3>{err?.statusText}</h3>
                <h5>{err?.data || 'Oops! Something went wrong.'}</h5>
            </div>
        </div>
    )
}
export default Error;

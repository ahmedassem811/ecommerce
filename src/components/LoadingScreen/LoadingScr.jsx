import React from 'react'

export default function LoadingScr() {
    return <>

        <div className="loading bg-opacity-75 bg-dark  position-fixed top-0 bottom-0 start-0 end-0 vh-100 d-flex justify-content-center align-items-center">

            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>



    </>
}

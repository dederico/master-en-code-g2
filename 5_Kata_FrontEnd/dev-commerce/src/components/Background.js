import React from 'react';
import background from '../utils/background.png'

function Background() {
    return (
        <div className="bck-img"
            style={{
                background: `url(${background})`,
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                // marginLeft: '25vw',
                backgroundSize: 'cover'
            }}
        >
        </div >

    )
}
export default Background
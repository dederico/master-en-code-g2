import React from 'react';

function Profile() {
    return (
        <div>
            <h1 style={{
                'display': 'flex',
                'flexDirection': 'column',
                'alignItems': 'center'
            }}>Profile</h1>
            <div className="profile_pic" style={{
                'marginLeft': '40%'
            }}>
                <img src='' alt='profile_pic' />
            </div>
        </div>
    )
}


export default Profile

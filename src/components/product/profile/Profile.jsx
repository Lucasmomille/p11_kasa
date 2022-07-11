import React from 'react'
import './profile.scss'

export default function Profile({host}) {
    return (
        <div className="profile">
            <div className='profile__name'>{host.name}</div>
            <div className='profile__picture'>
                <img src={host.picture} alt='' className='profile__img' />
            </div>
        </div>
    )
}

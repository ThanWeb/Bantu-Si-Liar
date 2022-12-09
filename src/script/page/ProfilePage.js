import React from 'react'
import PropTypes from 'prop-types'
import setDisplayDrawer from '../utils/set-display-drawer'

const ProfilePage = ({ data }) => {
    setDisplayDrawer()
    return (
        <div className='profile-page'>
            <div className='container'>
                <div>
                    <img src={data.picture} alt='Profile Picture'/>
                </div>
                <div>
                    <span>Nama Pengguna</span>
                    <p>{data.name}</p>
                </div>
                <div>
                    <span>Nomor Telepon</span>
                    <p>{data.phone}</p>
                </div>
                <div>
                    <span>Provinsi</span>
                    <p>{data.province}</p>
                </div>
                <div>
                    <span>Kabupaten/ Kota</span>
                    <p>{data.city}</p>
                </div>
                <div>
                    <span>Alamat</span>
                    <p>{data.address}</p>
                </div>
            </div>
        </div>
    )
}

ProfilePage.propTypes = {
    data: PropTypes.object
}

export default ProfilePage

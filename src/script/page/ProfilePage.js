import React from 'react'

function ProfilePage () {
    return <>
        <div className='container'>
            <div className='profile'>
                <h1>Profil</h1>
                <img src='https://cdn-icons-png.flaticon.com/512/61/61173.png' alt='icon'/>

                <div className='input-profile'>
                    <div className='card'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' />
                    </div>
                    <div className='card'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' />
                    </div>
                    <div className='card'>
                        <label htmlFor='nama'>Nama</label>
                        <input type='text' id='nama' />
                    </div>
                    <div className='card'>
                        <label htmlFor='alamat'>Alamat</label>
                        <input type='text' id='alamat' />
                    </div>
                    <div className='card'>
                        <label htmlFor='noHp'>No HP</label>
                        <input type='text' id='noHp' />
                    </div>
                    <div className='input_submit'>
                        <button type='submit'>SIMPAN</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProfilePage

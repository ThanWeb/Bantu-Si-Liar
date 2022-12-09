import React from 'react'
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    const findYear = () => {
        const now = new Date()
        const year = `${now.getFullYear()}`
        return year
    }

    return (
        <footer className='footer'>
            <h3>Media Sosial</h3>
            <div className='social-media'>
                <div>
                    <a href='https://whatsapp.com' target='_blank' rel='noreferrer'>
                        <BsWhatsapp/>
                    </a>
                </div>
                <div>
                    <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                        <BsFacebook/>
                    </a>
                </div>
                <div>
                    <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                        <BsInstagram/>
                    </a>
                </div>
            </div>
            <div>
                <p>&#169; {findYear()} Bantu Si Liar Organization. All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer

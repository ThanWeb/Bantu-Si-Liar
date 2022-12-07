import React from 'react'
import { BiCamera, BiBookOpen, BiNotepad } from 'react-icons/bi'

const AboutSection = () => {
    return (
        <div className='about-section'>
            <h2>Bantu Si Liar</h2>
            <p>Sebuah aplikasi digital non-profit berbasis teknologi website yang dibuat dengan tujuan menolong hewan-hewan peliharaan yang terhilang atau tidak memiliki tempat tinggal</p>
            <h3>Fitur Yang Disediakan</h3>
            <div>
                <div>
                    <BiNotepad/>
                    <p>Melihat Laporan</p>
                </div>
                <div>
                    <BiCamera/>
                    <p>Membuat Laporan</p>
                </div>
                <div>
                    <BiBookOpen/>
                    <p>Membaca Artikel</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection

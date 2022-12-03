const showPictureOption = () => {
    if (document.querySelector('#picture-list')) {
        document.querySelector('#picture-list').classList.remove('hidden')

        const allOption = document.querySelectorAll('.picture-option')
        allOption.forEach(option => {
            option.addEventListener('click', () => {
                document.querySelector('#picture-list').classList.add('hidden')
            })
        })
    }
}

export default showPictureOption

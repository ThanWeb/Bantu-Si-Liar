const setDisplayDrawer = () => {
    if (document.querySelector('.drawer')) {
        if (document.querySelector('.drawer').classList.contains('show')) {
            document.querySelector('.drawer').classList.remove('show')
        }
    }
}

export default setDisplayDrawer

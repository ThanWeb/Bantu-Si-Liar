const showNotification = () => {
    if (document.querySelector('.notification-alert')) {
        document.querySelector('.notification-alert').classList.add('show')
        setTimeout(() => {
            document.querySelector('.notification-alert').classList.remove('show')
        }, 3000)
    }
}

export default showNotification

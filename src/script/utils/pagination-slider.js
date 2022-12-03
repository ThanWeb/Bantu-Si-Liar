const paginationSlider = () => {
    const paginations = document.querySelectorAll('.pagination')
    paginations.forEach(pagination => {
        pagination.classList.toggle('hidden')
    })
}

export default paginationSlider

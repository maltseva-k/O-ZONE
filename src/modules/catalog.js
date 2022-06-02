const catalog = () => {
    const catalogBtn = document.querySelector('.catalog-button')
    const catalogModal = document.querySelector('.catalog')

    let isModalOpen = false
    catalogBtn.addEventListener('click', () => {

        if (isModalOpen) {
            catalogModal.style.display = 'none'
        } else {
            catalogModal.style.display = 'block'
        }
        isModalOpen = !isModalOpen
    })

}

export default catalog

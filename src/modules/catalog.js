import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters"

const catalog = () => {
    const catalogBtn = document.querySelector('.catalog-button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = document.querySelectorAll('.catalog-list li')

    let isModalOpen = false
    catalogBtn.addEventListener('click', () => {

        if (isModalOpen) {
            catalogModal.style.display = 'none'
        } else {
            catalogModal.style.display = 'block'
        }
        isModalOpen = !isModalOpen
    })

    catalogModalItems.forEach((categoryItem) => {
        categoryItem.addEventListener('click', () => {
            const category = categoryItem.textContent

            getData().then((data) => {
                renderGoods(categoryFilter(data, category))
            })
        })

    })

}

export default catalog

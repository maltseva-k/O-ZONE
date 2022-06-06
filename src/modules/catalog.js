import getData from "./getData";
import renderGoods from "./renderGoods";
import {categoryFilter, searchFilter} from "./filters"

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
                let goods = categoryFilter(data, category)
                localStorage.setItem('searchResult', JSON.stringify(goods))
                renderGoods(goods)
            })
        })

    })

}

export default catalog

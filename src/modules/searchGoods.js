import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters"

const searchGoods = () => {
    const searchInput = document.querySelector('.search_input')

    searchInput.addEventListener('input', (event) => {
        const minInput = document.querySelector('#min')
        const maxInput = document.querySelector('#max')
        minInput.value=''
        maxInput.value=''
        const checkboxInput = document.getElementById('discount-checkbox')
        const checkboxSpan = document.querySelector('.filter-check_checkmark')

        checkboxInput.checked = false
        checkboxSpan.classList.remove('checked')


        const value = event.target.value

        getData().then((data) => {
            let goods = searchFilter(data, value)
            localStorage.setItem('searchResult', JSON.stringify(goods))
            renderGoods(goods)
        })
    })

}

export default searchGoods

import getData from './getData'
import renderGoods from './renderGoods'
import { priceFilter, hotSaleFilter } from './filters'

const filterGoodsOfPrice = () => {
    const minInput = document.querySelector('#min')
    const maxInput = document.querySelector('#max')


    minInput.addEventListener('input', () => {
        const searchResult = localStorage.getItem('searchResult') ? JSON.parse(localStorage.getItem('searchResult')) : []
        if (searchResult.length) {

                renderGoods(priceFilter(hotSaleFilter(searchResult, checkboxInput.checked), minInput.value, maxInput.value))

        } else {
            getData().then((data) => {
                renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
            })
        }

    })
    maxInput.addEventListener('input', () => {
        const searchResult = localStorage.getItem('searchResult') ? JSON.parse(localStorage.getItem('searchResult')) : []
        if (searchResult.length) {

                renderGoods(priceFilter(hotSaleFilter(searchResult, checkboxInput.checked), minInput.value, maxInput.value))

        } else {
            getData().then((data) => {
                renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
            })
        }

    })


    const checkboxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    checkboxInput.addEventListener('change', () => {
        const searchResult = localStorage.getItem('searchResult') ? JSON.parse(localStorage.getItem('searchResult')) : []

        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }

        if (searchResult.length) {

                renderGoods(hotSaleFilter(priceFilter(searchResult, minInput.value, maxInput.value), checkboxInput.checked))

        } else {
            getData().then((data) => {
                renderGoods(hotSaleFilter(priceFilter(data, minInput.value, maxInput.value), checkboxInput.checked))
            })
        }



    })
}


export default filterGoodsOfPrice

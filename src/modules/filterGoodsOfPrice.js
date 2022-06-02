import getData from './getData'
import renderGoods from './renderGoods'
import { priceFilter, hotSaleFilter } from './filters'

const filterGoodsOfPrice = () => {
    const minInput = document.querySelector('#min')
    const maxInput = document.querySelector('#max')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(data, minInput.value, maxInput.value))
        })
    })
    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(data, minInput.value, maxInput.value))
        })
    })

}

const checkboxInput = document.getElementById('discount-checkbox')
const checkboxSpan = document.querySelector('.filter-check_checkmark')

checkboxInput.addEventListener('change', () => {

    if (checkboxInput.checked) {
        checkboxSpan.classList.add('checked')
    } else {
        checkboxSpan.classList.remove('checked')
    }

    getData().then((data) => {
        renderGoods(hotSaleFilter(data, checkboxInput.checked))
    })

})


export default filterGoodsOfPrice

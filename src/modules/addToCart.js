import renderCart from "./renderCart";
import goodsCounter from "./goodsCounter";

const addToCart = () => {
    const goodsWrapper = document.querySelector('#goods')

    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find((item) => {
                return item.id === +key
            })

            const dubble = cart.find((item) => {
                return item.id === goodItem.id
            })
            if (dubble == undefined) {
                goodItem.quant = 1
                cart.push(goodItem)
            } else {
                dubble.quant += 1
            }

            localStorage.setItem('cart', JSON.stringify(cart))

            goodsCounter()
        }

    })
}

export default addToCart

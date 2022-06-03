import renderCart from "./renderCart";
import goodsCounter from "./goodsCounter";

const deleteOfCart = () => {
    const cartWrapper = document.querySelector('.cart')

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            console.log(index)

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)
            goodsCounter()
        }
    })

}

export default deleteOfCart

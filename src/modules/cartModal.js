import renderCart from "./renderCart";
import postOrder from "./postOrder";
import goodsCounter from "./goodsCounter";

const cartModal = () => {
    const cartBtn = document.querySelector('#cart')
    const modalCart = document.querySelector('.cart')
    const closeModalBtn = document.querySelector('.cart-close')
    const postOrderBtn = document.querySelector('.cart-confirm')

    const cartTotal = document.querySelector('.cart-total > span')

    let isCartModalOpen = false

    cartBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        modalCart.style.display = 'flex'
        isCartModalOpen = true

        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    })

    closeModalBtn.addEventListener('click', () => {
        modalCart.style.display = 'none'
        isCartModalOpen = false
    })

    document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                modalCart.style.display = 'none'
                isCartModalOpen = false
            }
    })

    postOrderBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        postOrder(cart).then(() => {
            localStorage.removeItem('cart')

            renderCart([])

            cartTotal.textContent = 0
            goodsCounter()
        })
    })


}

export default cartModal

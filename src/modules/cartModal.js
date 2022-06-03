import renderCart from "./renderCart";

const cartModal = () => {
    const cartBtn = document.querySelector('#cart')
    const modalCart = document.querySelector('.cart')
    const closeModalBtn = document.querySelector('.cart-close')

    let isCartModalOpen = false

    cartBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        modalCart.style.display = 'flex'
        isCartModalOpen = true

        renderCart(cart)
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


}

export default cartModal

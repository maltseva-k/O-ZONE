import renderCart from "./renderCart";
import goodsCounter from "./goodsCounter";

const deleteOfCart = () => {
    const cartWrapper = document.querySelector('.cart')
    const cartTotal = document.querySelector('.cart-total > span')

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            if (cart[index].quant > 1) {
                cart[index].quant --
            } else {
                cart.splice(index, 1)
            }



            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)

            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + (goodItem.price * goodItem.quant)
            }, 0)
            goodsCounter()
        }
    })

}

export default deleteOfCart

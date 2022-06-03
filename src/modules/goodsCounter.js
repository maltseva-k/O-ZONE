const goodsCounter = () => {
    const counter = document.querySelector('#cart >span')
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    counter.textContent = cart.length
}

export default goodsCounter

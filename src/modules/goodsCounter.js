const goodsCounter = () => {
    const counter = document.querySelector('#cart >span')
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    counter.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.quant
    }, 0) || 0
}

export default goodsCounter

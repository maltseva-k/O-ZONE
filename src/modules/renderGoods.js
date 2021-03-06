const renderGoods = (goods) => {
    const goodsWrapper = document.querySelector('.goods_wrapper')

    localStorage.setItem('goods', JSON.stringify(goods))

    goodsWrapper.innerHTML = ''

    goods.forEach((goodsItem) => {

        goodsWrapper.insertAdjacentHTML('beforeend',
            `<div class="card" data-key="${goodsItem.id}">
                    ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                              style="background-image: url('${goodsItem.img}')">
                        </span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${goodsItem.price} ₽</div>
                        <h5 class="card-title">${goodsItem.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
        `)
    })
}

export default renderGoods

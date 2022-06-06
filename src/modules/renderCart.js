const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper')


    cartWrapper.innerHTML = ''

    if (goods.length === 0) {
        cartWrapper.insertAdjacentHTML('beforeend',
            `<div id="cart-empty">
                    Ваша корзина пока пуста
                 </div>
        `)

    } else {
        goods.forEach((goodsItem) => {

                cartWrapper.insertAdjacentHTML('beforeend', `
                    <div class="cardincart" data-key="${goodsItem.id}">
                        <div class="cardincart-img-wrapper">
                            <span class="card-img-top"
                                  style="background-image: url('${goodsItem.img}')">
                            </span>
                        </div>
                        ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                        <div class="cardincart-body">
                            <h5 class="cardincart-title">${goodsItem.title}</h5>
                            
                            <div class="cardincart-price">
                                <div>${goodsItem.quant} шт</div>
                                <div>${goodsItem.price} ₽/шт</div>     
                                <button class="btn btn-primary">Удалить</button>                         
                            </div>
                            <div class="cardincart-sum">
                               Итого ${goodsItem.quant * goodsItem.price} ₽
                               
                            </div>
                          
                        </div>
                    </div>
                `)




        })
    }

}

export default renderCart

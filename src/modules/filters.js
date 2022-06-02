export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, category) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === category
    })
}

export const priceFilter = (goods, minPrice, maxPrice) => {
    return goods.filter((goodsItem) => {
        if (minPrice === '' && maxPrice === '') {
            return goodsItem
        } else if (minPrice !== '' && maxPrice === '') {
            return goodsItem.price > +minPrice
        } else if (minPrice === '' && maxPrice !== '') {
            return goodsItem.price < +maxPrice
        } else if (minPrice !== '' && maxPrice !== '') {
            return goodsItem.price > +minPrice && goodsItem.price < +maxPrice
        }
    })
}

export const hotSaleFilter = (goods, isChecked) => {
    return goods.filter((goodsItem) => {
        if (isChecked) {
            return goodsItem.sale === true
        } else {
            return goodsItem
        }
    })
}

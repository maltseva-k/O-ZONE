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

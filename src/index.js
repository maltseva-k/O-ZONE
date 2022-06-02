import getData from './modules/getData'
import renderGoods from './modules/renderGoods'
import searchGoods from "./modules/searchGoods";
import catalog from "./modules/catalog";
import cartModal from './modules/cartModal'
import filterGoodsOfPrice from './modules/filterGoodsOfPrice'

getData().then((data)=> {
    renderGoods(data)
})

searchGoods()
catalog()
cartModal()
filterGoodsOfPrice()

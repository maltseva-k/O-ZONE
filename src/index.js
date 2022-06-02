import getData from './modules/getData'
import renderGoods from './modules/renderGoods'
import searchGoods from "./modules/searchGoods";

getData().then((data)=> {
    renderGoods(data)
})

searchGoods()


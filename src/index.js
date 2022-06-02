import getData from './modules/getData'
import renderGoods from './modules/renderGoods'
import searchGoods from "./modules/searchGoods";
import catalog from "./modules/catalog";

getData().then((data)=> {
    renderGoods(data)
})

searchGoods()
catalog()


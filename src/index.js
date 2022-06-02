import getData from './modules/getData'
import renderGoods from './modules/renderGoods'

getData().then((data)=> {
    renderGoods(data)
})



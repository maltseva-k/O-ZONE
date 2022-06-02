import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters"

const searchGoods = () => {
    const searchInput = document.querySelector('.search_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value
        console.log(value)

        getData().then((data) => {
            renderGoods(searchFilter(data, value))
        })
    })

}

export default searchGoods

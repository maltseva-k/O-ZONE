const getData = () => {
    return fetch('https://o-zone-c0bda-default-rtdb.firebaseio.com/goods.json')
                .then((response) => response.json())
}

export default getData

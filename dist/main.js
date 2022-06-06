/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _modules_searchGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/searchGoods */ \"./src/modules/searchGoods.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_cartModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cartModal */ \"./src/modules/cartModal.js\");\n/* harmony import */ var _modules_filterGoodsOfPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/filterGoodsOfPrice */ \"./src/modules/filterGoodsOfPrice.js\");\n/* harmony import */ var _modules_addToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/addToCart */ \"./src/modules/addToCart.js\");\n/* harmony import */ var _modules_deleteOfCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/deleteOfCart */ \"./src/modules/deleteOfCart.js\");\n/* harmony import */ var _modules_goodsCounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/goodsCounter */ \"./src/modules/goodsCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=> {\r\n    (0,_modules_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n})\r\n\r\n;(0,_modules_searchGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_cartModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_filterGoodsOfPrice__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_addToCart__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_deleteOfCart__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_goodsCounter__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n\r\nlocalStorage.setItem('searchResult', JSON.stringify([]))\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/index.js?");

/***/ }),

/***/ "./src/modules/addToCart.js":
/*!**********************************!*\
  !*** ./src/modules/addToCart.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _goodsCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsCounter */ \"./src/modules/goodsCounter.js\");\n\r\n\r\n\r\nconst addToCart = () => {\r\n    const goodsWrapper = document.querySelector('#goods')\r\n\r\n    goodsWrapper.addEventListener('click', (event) => {\r\n        if (event.target.classList.contains('btn-primary')) {\r\n            const card = event.target.closest('.card')\r\n            const key = card.dataset.key\r\n            const goods = JSON.parse(localStorage.getItem('goods'))\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n            const goodItem = goods.find((item) => {\r\n                return item.id === +key\r\n            })\r\n\r\n            const dubble = cart.find((item) => {\r\n                return item.id === goodItem.id\r\n            })\r\n            if (dubble == undefined) {\r\n                goodItem.quant = 1\r\n                cart.push(goodItem)\r\n            } else {\r\n                dubble.quant += 1\r\n            }\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n            ;(0,_goodsCounter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        }\r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToCart);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/addToCart.js?");

/***/ }),

/***/ "./src/modules/cartModal.js":
/*!**********************************!*\
  !*** ./src/modules/cartModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postOrder */ \"./src/modules/postOrder.js\");\n/* harmony import */ var _goodsCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goodsCounter */ \"./src/modules/goodsCounter.js\");\n\r\n\r\n\r\n\r\nconst cartModal = () => {\r\n    const cartBtn = document.querySelector('#cart')\r\n    const modalCart = document.querySelector('.cart')\r\n    const closeModalBtn = document.querySelector('.cart-close')\r\n    const postOrderBtn = document.querySelector('.cart-confirm')\r\n\r\n    const cartTotal = document.querySelector('.cart-total > span')\r\n\r\n    let isCartModalOpen = false\r\n\r\n    cartBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n        modalCart.style.display = 'flex'\r\n        isCartModalOpen = true\r\n\r\n        ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n            return sum + (goodItem.price * goodItem.quant)\r\n        }, 0)\r\n    })\r\n\r\n    closeModalBtn.addEventListener('click', () => {\r\n        modalCart.style.display = 'none'\r\n        isCartModalOpen = false\r\n    })\r\n\r\n    document.addEventListener('keydown', (event) => {\r\n            if (event.key === 'Escape') {\r\n                modalCart.style.display = 'none'\r\n                isCartModalOpen = false\r\n            }\r\n    })\r\n\r\n    postOrderBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n        ;(0,_postOrder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n            localStorage.removeItem('cart')\r\n\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n\r\n            cartTotal.textContent = 0\r\n            ;(0,_goodsCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        })\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartModal);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/cartModal.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const catalogBtn = document.querySelector('.catalog-button')\r\n    const catalogModal = document.querySelector('.catalog')\r\n    const catalogModalItems = document.querySelectorAll('.catalog-list li')\r\n\r\n    let isModalOpen = false\r\n    catalogBtn.addEventListener('click', () => {\r\n\r\n        if (isModalOpen) {\r\n            catalogModal.style.display = 'none'\r\n        } else {\r\n            catalogModal.style.display = 'block'\r\n        }\r\n        isModalOpen = !isModalOpen\r\n    })\r\n\r\n    catalogModalItems.forEach((categoryItem) => {\r\n        categoryItem.addEventListener('click', () => {\r\n            const category = categoryItem.textContent\r\n\r\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                let goods = (0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, category)\r\n                localStorage.setItem('searchResult', JSON.stringify(goods))\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(goods)\r\n            })\r\n        })\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/deleteOfCart.js":
/*!*************************************!*\
  !*** ./src/modules/deleteOfCart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _goodsCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsCounter */ \"./src/modules/goodsCounter.js\");\n\r\n\r\n\r\nconst deleteOfCart = () => {\r\n    const cartWrapper = document.querySelector('.cart')\r\n    const cartTotal = document.querySelector('.cart-total > span')\r\n\r\n    cartWrapper.addEventListener('click', (event) => {\r\n        if (event.target.classList.contains('btn-primary')) {\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n            const card = event.target.closest('.cardincart')\r\n            const key = card.dataset.key\r\n            const index = cart.findIndex((item) => {\r\n                return item.id === +key\r\n            })\r\n            if (cart[index].quant > 1) {\r\n                cart[index].quant --\r\n            } else {\r\n                cart.splice(index, 1)\r\n            }\r\n\r\n\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n\r\n            cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n                return sum + (goodItem.price * goodItem.quant)\r\n            }, 0)\r\n            ;(0,_goodsCounter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteOfCart);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/deleteOfCart.js?");

/***/ }),

/***/ "./src/modules/filterGoodsOfPrice.js":
/*!*******************************************!*\
  !*** ./src/modules/filterGoodsOfPrice.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst filterGoodsOfPrice = () => {\r\n    const minInput = document.querySelector('#min')\r\n    const maxInput = document.querySelector('#max')\r\n\r\n\r\n    minInput.addEventListener('input', () => {\r\n        const searchResult = localStorage.getItem('searchResult') ? JSON.parse(localStorage.getItem('searchResult')) : []\r\n        if (searchResult.length) {\r\n\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(searchResult, checkboxInput.checked), minInput.value, maxInput.value))\r\n\r\n        } else {\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\r\n            })\r\n        }\r\n\r\n    })\r\n    maxInput.addEventListener('input', () => {\r\n        const searchResult = localStorage.getItem('searchResult') ? JSON.parse(localStorage.getItem('searchResult')) : []\r\n        if (searchResult.length) {\r\n\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(searchResult, checkboxInput.checked), minInput.value, maxInput.value))\r\n\r\n        } else {\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\r\n            })\r\n        }\r\n\r\n    })\r\n\r\n\r\n    const checkboxInput = document.getElementById('discount-checkbox')\r\n    const checkboxSpan = document.querySelector('.filter-check_checkmark')\r\n\r\n    checkboxInput.addEventListener('change', () => {\r\n        const searchResult = localStorage.getItem('searchResult') ? JSON.parse(localStorage.getItem('searchResult')) : []\r\n\r\n        if (checkboxInput.checked) {\r\n            checkboxSpan.classList.add('checked')\r\n        } else {\r\n            checkboxSpan.classList.remove('checked')\r\n        }\r\n\r\n        if (searchResult.length) {\r\n\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(searchResult, minInput.value, maxInput.value), checkboxInput.checked))\r\n\r\n        } else {\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, minInput.value, maxInput.value), checkboxInput.checked))\r\n            })\r\n        }\r\n\r\n\r\n\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterGoodsOfPrice);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/filterGoodsOfPrice.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase())\r\n    })\r\n}\r\n\r\nconst categoryFilter = (goods, category) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.category === category\r\n    })\r\n}\r\n\r\nconst priceFilter = (goods, minPrice, maxPrice) => {\r\n    return goods.filter((goodsItem) => {\r\n        if (minPrice === '' && maxPrice === '') {\r\n            return goodsItem\r\n        } else if (minPrice !== '' && maxPrice === '') {\r\n            return goodsItem.price > +minPrice\r\n        } else if (minPrice === '' && maxPrice !== '') {\r\n            return goodsItem.price < +maxPrice\r\n        } else if (minPrice !== '' && maxPrice !== '') {\r\n            return goodsItem.price > +minPrice && goodsItem.price < +maxPrice\r\n        }\r\n    })\r\n}\r\n\r\nconst hotSaleFilter = (goods, isChecked) => {\r\n    return goods.filter((goodsItem) => {\r\n        if (isChecked) {\r\n            return goodsItem.sale === true\r\n        } else {\r\n            return goodsItem\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n    return fetch('https://o-zone-c0bda-default-rtdb.firebaseio.com/goods.json')\r\n                .then((response) => response.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/goodsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/goodsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst goodsCounter = () => {\r\n    const counter = document.querySelector('#cart >span')\r\n    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n    counter.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.quant\r\n    }, 0) || 0\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goodsCounter);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/goodsCounter.js?");

/***/ }),

/***/ "./src/modules/postOrder.js":
/*!**********************************!*\
  !*** ./src/modules/postOrder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postOrder = (cart) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n    })\r\n        .then((response) => response.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postOrder);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/postOrder.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n    const cartWrapper = document.querySelector('.cart-wrapper')\r\n\r\n\r\n    cartWrapper.innerHTML = ''\r\n\r\n    if (goods.length === 0) {\r\n        cartWrapper.insertAdjacentHTML('beforeend',\r\n            `<div id=\"cart-empty\">\r\n                    Ваша корзина пока пуста\r\n                 </div>\r\n        `)\r\n\r\n    } else {\r\n        goods.forEach((goodsItem) => {\r\n\r\n                cartWrapper.insertAdjacentHTML('beforeend', `\r\n                    <div class=\"cardincart\" data-key=\"${goodsItem.id}\">\r\n                        <div class=\"cardincart-img-wrapper\">\r\n                            <span class=\"card-img-top\"\r\n                                  style=\"background-image: url('${goodsItem.img}')\">\r\n                            </span>\r\n                        </div>\r\n                        ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                        <div class=\"cardincart-body\">\r\n                            <h5 class=\"cardincart-title\">${goodsItem.title}</h5>\r\n                            \r\n                            <div class=\"cardincart-price\">\r\n                                <div>${goodsItem.quant} шт</div>\r\n                                <div>${goodsItem.price} ₽/шт</div>     \r\n                                <button class=\"btn btn-primary\">Удалить</button>                         \r\n                            </div>\r\n                            <div class=\"cardincart-sum\">\r\n                               Итого ${goodsItem.quant * goodsItem.price} ₽\r\n                               \r\n                            </div>\r\n                          \r\n                        </div>\r\n                    </div>\r\n                `)\r\n\r\n\r\n\r\n\r\n        })\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods_wrapper')\r\n\r\n    localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n    goodsWrapper.innerHTML = ''\r\n\r\n    goods.forEach((goodsItem) => {\r\n\r\n        goodsWrapper.insertAdjacentHTML('beforeend',\r\n            `<div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                    ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                              style=\"background-image: url('${goodsItem.img}')\">\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n        `)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/searchGoods.js":
/*!************************************!*\
  !*** ./src/modules/searchGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst searchGoods = () => {\r\n    const searchInput = document.querySelector('.search_input')\r\n\r\n    searchInput.addEventListener('input', (event) => {\r\n        const minInput = document.querySelector('#min')\r\n        const maxInput = document.querySelector('#max')\r\n        minInput.value=''\r\n        maxInput.value=''\r\n        const checkboxInput = document.getElementById('discount-checkbox')\r\n        const checkboxSpan = document.querySelector('.filter-check_checkmark')\r\n\r\n        checkboxInput.checked = false\r\n        checkboxSpan.classList.remove('checked')\r\n\r\n\r\n        const value = event.target.value\r\n\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            let goods = (0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value)\r\n            localStorage.setItem('searchResult', JSON.stringify(goods))\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(goods)\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchGoods);\r\n\n\n//# sourceURL=webpack://O-ZONE/./src/modules/searchGoods.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
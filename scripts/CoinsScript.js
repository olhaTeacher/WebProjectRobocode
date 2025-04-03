let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
let container = document.querySelector(".coin-container")

let btn_container = document.querySelector(".btn-container")

let search_field = document.querySelector(".search-field")

let name_btn = document.querySelector("#name-button")
let price_btn = document.querySelector("#price-button")
let percentange_btn = document.querySelector("#percentange-button")
let quantity_btn = document.querySelector("#quantity-button")

fetch(url)
    .then(async (responce) => {
        let date = await responce.json()
        let data = date.sort((first, second) => { //Первинне сортування за ціною
            if (first.current_price < second.current_price) {
                return 1
            }
            if (first.current_price > second.current_price) {
                return -1
            }
            return 0
        })
        console.log(data)
        searching(data)
        reOrder(data)
        createCoinList(data) //Викликаємо всі функції

    })

function createCoinList(data) { //Створюємо рядок опису кожної монети
    data.forEach(element => {
        let coin = document.createElement("tr") //Створюємо рядок та наповнюємо його елементами
        coin.classList.add(`coin-${element.id}`)
        coin.classList.add(`coin-div`)
        coin.innerHTML = `
        <td><img width="40px" src="${element.image}"></td>
        <td><a href="coin.html?id=${element.id}">${element.name}</a></td>
        <td>${element.current_price} USD</td>
        <td>${Math.floor(element.price_change_percentage_24h * 100) / 100}% </td>
        
        <td>${Math.floor(element.price_change_24h * 100) / 100} USD</td>
        `
        container.appendChild(coin)
    });
}
function reOrder(data) {        //Створюємо сортування під кожну кнопку (при натисканні на кнопку сортується від більшого до меншого)
    price_btn.addEventListener("click", () => {
        search_field.value = ""

        name_btn.classList.remove("positive", "negative")
        name_btn.classList.add("neutral")

        percentange_btn.classList.remove("positive", "negative")
        percentange_btn.classList.add("neutral")

        quantity_btn.classList.remove("positive", "negative")
        quantity_btn.classList.add("neutral") //Очищаємо класи на інших кнопках
        console.log(price_btn.classList.value)
        switch (price_btn.classList.value) { //Створюємо свіч під кожну ситуацію та клас
            case "neutral":
                price_btn.classList.remove("neutral")
                price_btn.classList.add("positive")

                data = data.sort((first, second) => {
                    if (first.current_price < second.current_price) {
                        return 1
                    }
                    if (first.current_price > second.current_price) {
                        return -1
                    }
                    return 0

                })
                break
            case "positive":
                price_btn.classList.remove("positive")
                price_btn.classList.add("negative")

                data = data.sort((first, second) => {
                    if (first.current_price < second.current_price) {
                        return -1
                    }
                    if (first.current_price > second.current_price) {
                        return 1
                    }
                    return 0
                })
                break
            case "negative":
                price_btn.classList.remove("negative")
                price_btn.classList.add("positive")

                data = data.sort((first, second) => {
                    if (first.current_price < second.current_price) {
                        return 1
                    }
                    if (first.current_price > second.current_price) {
                        return -1
                    }
                    return 0
                })
                break



        }
        container.innerHTML = ""
        createCoinList(data) //Перестворюємо таблицю з відсортованими даними
    })

    name_btn.addEventListener("click", () => {
        search_field.value = ""

        price_btn.classList.remove("positive", "negative")
        price_btn.classList.add("neutral")

        percentange_btn.classList.remove("positive", "negative")
        percentange_btn.classList.add("neutral")

        quantity_btn.classList.remove("positive", "negative")
        quantity_btn.classList.add("neutral")
        console.log(name_btn.classList.value)
        switch (name_btn.classList.value) {
            case "neutral":
                name_btn.classList.remove("neutral")
                name_btn.classList.add("positive")

                data = data.sort((first, second) => {
                    if (first.name > second.name) {
                        return 1
                    }
                    if (first.name < second.name) {
                        return -1
                    }
                    return 0

                })
                break
            case "positive":
                name_btn.classList.remove("positive")
                name_btn.classList.add("negative")

                data = data.sort((first, second) => {
                    if (first.name > second.name) {
                        return -1
                    }
                    if (first.name < second.name) {
                        return 1
                    }
                    return 0
                })
                break
            case "negative":
                name_btn.classList.remove("negative")
                name_btn.classList.add("positive")

                data = data.sort((first, second) => {
                    if (first.name > second.name) {
                        return 1
                    }
                    if (first.name < second.name) {
                        return -1
                    }
                    return 0
                })
                break



        }
        container.innerHTML = ""
        createCoinList(data)
    })

    percentange_btn.addEventListener("click", () => {
        search_field.value = ""

        price_btn.classList.remove("positive", "negative")
        price_btn.classList.add("neutral")

        name_btn.classList.remove("positive", "negative")
        name_btn.classList.add("neutral")

        quantity_btn.classList.remove("positive", "negative")
        quantity_btn.classList.add("neutral")
        console.log(percentange_btn.classList.value)
        switch (percentange_btn.classList.value) {
            case "neutral":
                percentange_btn.classList.remove("neutral")
                percentange_btn.classList.add("positive")

                data = data.sort((first, second) => {
                    if (first.price_change_percentage_24h < second.price_change_percentage_24h) {
                        return 1
                    }
                    if (first.price_change_percentage_24h > second.price_change_percentage_24h) {
                        return -1
                    }
                    return 0

                })
                break
            case "positive":
                percentange_btn.classList.remove("positive")
                percentange_btn.classList.add("negative")

                data = data.sort((first, second) => {
                    if (first.price_change_percentage_24h < second.price_change_percentage_24h) {
                        return -1
                    }
                    if (first.price_change_percentage_24h > second.price_change_percentage_24h) {
                        return 1
                    }
                    return 0
                })
                break
            case "negative":
                percentange_btn.classList.remove("negative")
                percentange_btn.classList.add("positive")

                data = data.sort((first, second) => {
                    if (first.price_change_percentage_24h < second.price_change_percentage_24h) {
                        return 1
                    }
                    if (first.price_change_percentage_24h > second.price_change_percentage_24h) {
                        return -1
                    }
                    return 0
                })
                break



        }
        container.innerHTML = ""
        createCoinList(data)
    })


    quantity_btn.addEventListener("click", () => {
        search_field.value = ""

        price_btn.classList.remove("positive", "negative")
        price_btn.classList.add("neutral")

        name_btn.classList.remove("positive", "negative")
        name_btn.classList.add("neutral")

        percentange_btn.classList.remove("positive", "negative")
        percentange_btn.classList.add("neutral")
        console.log(quantity_btn.classList.value)
        switch (quantity_btn.classList.value) {
            case "neutral":
                quantity_btn.classList.remove("neutral")
                quantity_btn.classList.add("positive")

                data = data.sort((first, second) => {
                    if (first.price_change_24h < second.price_change_24h) {
                        return 1
                    }
                    if (first.price_change_24h > second.price_change_24h) {
                        return -1
                    }
                    return 0

                })
                break
            case "positive":
                quantity_btn.classList.remove("positive")
                quantity_btn.classList.add("negative")

                data = data.sort((first, second) => {
                    if (first.price_change_24h < second.price_change_24h) {
                        return -1
                    }
                    if (first.price_change_24h > second.price_change_24h) {
                        return 1
                    }
                    return 0
                })
                break
            case "negative":
                quantity_btn.classList.remove("negative")
                quantity_btn.classList.add("positive")

                data = data.sort((first, second) => {
                    if (first.price_change_24h < second.price_change_24h) {
                        return 1
                    }
                    if (first.price_change_24h > second.price_change_24h) {
                        return -1
                    }
                    return 0
                })
                break



        }
        container.innerHTML = ""
        createCoinList(data)
    })

}

function searching(data) {   //Створюємо функцію для фільтрування змінної та перестворення таблиці заново
    search_field.addEventListener("change", () => {
        data_new = data.filter(filtering)
        console.log(data_new)
        container.innerHTML = ""
        createCoinList(data_new)
    })

}

function filtering(data) { //Створюємо фільтральну функцію
    return data.name.toLowerCase().includes(search_field.value.toLowerCase())
}
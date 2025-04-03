let bannerText = document.querySelector(".text-wrapper")
let urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get('id') //Дістаємо інформацію про передане айді з посилання
let cont = document.querySelector("#container")
let inform = document.querySelector(".coin-info")
let coinUrl = `https://api.coingecko.com/api/v3/coins/${id}`
let btn = document.getElementById("date-btn")
let selector = 168
let date = Date.now()
let counter = 0


bannerText.innerHTML = id.toUpperCase();

async function getIpData(slct) {
    const params = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${slct / 24}`)
    data = await params.json()
    console.log(data)
    return data.prices;
}


function createInfo() { //Створюємо блок інформації про вибрану монету.
    let info = document.createElement("div")
    info.classList.add("info")
    fetch(coinUrl)
        .then(async (params) => {
            let DATA = await params.json()
            info.innerHTML = `
            <div class="info-first">
                <img src="${DATA.image.large}">
                <p>${DATA.description.en}</p>
            </div>
            <div class="info-second">
                <p><b>Was created</b>: ${DATA.genesis_date}</p>
                <p><b>Percentange change</b>: ${Math.floor(DATA.market_data.price_change_percentage_24h * 100) / 100}%</p>
                <p><b>Quantity change</b>: ${Math.floor(DATA.market_data.price_change_24h * 100) / 100}USD</p>
            </div>
        `
            inform.appendChild(info)
        })
}

createInfo()
async function renderChart(slct = 168) { //Створюємо функції зі створення графіка та виведення дат в залежності від кількості введених годин.
    const prices = await getIpData(slct);
    console.log(prices)
    let labels
    if (selector <= 72 && selector > 12) {
        labels = prices.map(price => Math.floor((date - price[0]) / 360000) / 10 + " hours ago");
    }
    else if (selector <= 12) {
        labels = prices.map(price => Math.floor((date - price[0]) / 360000) / 10 + " hours ago");
    }
    else {
        labels = prices.map(price => new Date(price[0]).toLocaleDateString());
    }
    console.log(labels)
    const values = prices.map(price => price[1]);

    const ctx = document.getElementById(`bitcoinChart${counter}`).getContext('2d'); //Створюємо графік за допомогою плагіна Chart
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `Ціна ${id} (USD)`,
                data: values,
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: false,
                        text: 'Дата'
                    }
                },
                y: {
                    title: {
                        display: false,
                        text: 'Ціна (USD)'
                    }
                }
            }
        }
    });
}
renderChart()

btn.addEventListener("click", (params) => { //Створюємо подію на кнопку зміни графіка.
    selector = document.getElementById("date-input").value * document.getElementById("selector").value //Дістаємо значення зі змінних в елементах "date-input" та "selector"
    cont.innerHTML = ""
    counter++
    cont.innerHTML = `<canvas id='bitcoinChart${counter}'></canvas>` //Через особливості плагіна нам потрібно видаляти старий канвас та створювати новий
    console.log()
    renderChart(selector)
})
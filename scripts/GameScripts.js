let cat = document.querySelector(".catdiv")
let paragraph = document.querySelector(".paragraph")
let items = document.querySelectorAll(".item")
let click = document.querySelector(".click_show")
let period = document.querySelector(".period_show")

let counter = 0
let adder = 1
let period_adder = 0



if (localStorage.getItem("counter") == null || localStorage.getItem("adder") == null) {
    localStorage.setItem("counter", String(counter))
    localStorage.setItem("adder", String(adder))
    localStorage.setItem("period_adder", String(period_adder))
    console.log("No store")
} else {
    console.log("There is store")
    counter = Number(localStorage.getItem("counter"))
    adder = Number(localStorage.getItem("adder"))
    period_adder = Number(localStorage.getItem("period_adder"))
}   //Зберігаємо або дістаємо інформацію з локалстораджа

console.log(items)

paragraph.innerHTML = counter + "$"
click.innerHTML = "Ви отримуєте " + adder + "$ за один клік"
period.innerHTML = "Автоставн " + period_adder + "$ за одину секунду"

cat.addEventListener("click", () => { //Кнопка додавання грошей
    counter += adder
    paragraph.innerHTML = `${counter}$`
    localStorage.setItem("counter", String(counter))


    cat.classList.add("click-animation");
    setTimeout(() => { //Створили анімацію кота під час кліку
        cat.classList.remove("click-animation");
    }, 200);
})

items.forEach((element) => {  //Функція купівлі предметів
    console.log(element.dataset.price)
    element.addEventListener("click", () => {
        if (counter >= element.dataset.price) {
            if (element.dataset.type == "def") {
                counter -= +element.dataset.price
                adder += +element.dataset.add
            }
            else {
                counter -= +element.dataset.price
                period_adder += +element.dataset.add
            }
            console.log(counter)
            paragraph.innerHTML = `${counter}$`
            click.innerHTML = "Ви отримуєте " + adder + "$ за один клік"
            period.innerHTML = "Автоставн " + period_adder + "$ за одину секунду"

            localStorage.setItem("counter", String(counter))
            localStorage.setItem("adder", String(adder))
            localStorage.setItem("period_adder", String(period_adder))
        }
    })
})

function addPeriodicNumber() {
    counter += period_adder
    paragraph.innerHTML = counter + "$"
    console.log(period_adder)
    localStorage.setItem("counter", String(counter))
}

setInterval(addPeriodicNumber, 1000) //Щосекундні додавання


const style = document.createElement("style"); //Створили анімацію кота під час кліку
style.innerHTML = `
    .click-animation {
        transform: scale(1.1);
        transition: transform 0.2s ease;
    }
`;
document.head.appendChild(style);

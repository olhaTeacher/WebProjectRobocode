let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");

// Код на зміну статусу кнопки 1
btn1.addEventListener('click', function () {
    btn1.innerHTML = btn1.innerHTML === "-" ? "+" : "-";
    btn1.classList.toggle('btn_active');
    text1.classList.toggle('active');
    btn2.innerHTML = "+";
    btn3.innerHTML = "+";
    btn2.classList.remove('btn_active');
    btn3.classList.remove('btn_active');
    text2.classList.remove('active');
    text3.classList.remove('active');
});
// Код на зміну статусу кнопки 2
btn2.addEventListener('click', function () {
    btn2.innerHTML = btn2.innerHTML === "-" ? "+" : "-";
    btn2.classList.toggle('btn_active');
    text2.classList.toggle('active');
    btn1.innerHTML = "+";
    btn3.innerHTML = "+";
    btn1.classList.remove('btn_active');
    btn3.classList.remove('btn_active');
    text1.classList.remove('active');
    text3.classList.remove('active');
});
// Код на зміну статусу кнопки 3
btn3.addEventListener('click', function () {
    btn3.innerHTML = btn3.innerHTML === "-" ? "+" : "-";
    btn3.classList.toggle('btn_active');
    text3.classList.toggle('active');
    btn1.innerHTML = "+";
    btn2.innerHTML = "+";
    btn1.classList.remove('btn_active');
    btn2.classList.remove('btn_active');
    text1.classList.remove('active');
    text2.classList.remove('active');
});

//AJAX, сетевые API fetch, promise
//BOM коротко
// события два метода назначения обработчика, всплытие и погружение, параметры события объект event
///шаблоны в DOM
//создание объетов в DOM 
//получение элементов DOM и доступ к атрибутам в HTML 5 атрибут data
// DOM методы работы с DOM
//строки методы работы со строками, слайсы
//массивы методы массивов (деструктуризация, rest и спред оператор)

//Объекты создание и работа с объектами, методы объектов, деструктуризация, копирование обектов
let sharik = {
    Aname: "Sharik",
    poroda: "Dvorterer",
    age: 3,
    speak(){
        console.log("ГАВ!! Я Шарик");
    }
}

const Bob = {
    Aname: "Bobik",
    poroda: "Ovcharka",
    age: 47,
    speak(){
        console.log("ГАВ!! Я Бобик");
    }
}

let Hourse = {
    Aname: "Лошадь",
    poroda: "Скаковая",
    age: 470,
    speak(){
        console.log("Игго Я Лошадь");
    }
}
let f = {};
  Object.assign(f, Bob);
f.Aname ="Полкан";

function getName(a){
    console.log(a.name);
}
function speak(b){
        b.speak();
}
/*
let {Aname, poroda, age} = Bob;
console.log(Aname);
console.log(poroda);
console.log(age);

function showData(Aname, poroda, age){
    console.log("Имя :");
    console.log(Aname);
    console.log("Порода :");
    console.log(poroda);
    console.log("Возраст :");
    console.log(age);
} 
*/

console.log(Bob.Aname);
console.log(f);
speak(sharik);
speak(Bob);
speak(Hourse)
//showData(Aname, poroda, age);


//замыкания
/*
function fn(){
    let mesg = "Привет !"
    console.log("вызов fn");
    function fn2(){
        console.log("вызов fn2");
        console.log("вызов fn2", mesg);
    }
    return fn2;
}

let c = fn();
c();
*/
//функции область видимости, функции как объект, поднятие определения, контекст, стрелочные фунции, параметры функции, arguments
/*
let c = ()=> {
    console.log(this)
 }

function fn(){
        a = 16;
        console.log("вызов внутри функции" );
        console.log("стрелочная");
        c();
    }
let func = fn;
let b = 10;
func();

c(25, 10);
console.log(b);
*/
//console.log("вне внутри функции" );
//console.log(b);
//Переменные const var let их отличие поднятие определения
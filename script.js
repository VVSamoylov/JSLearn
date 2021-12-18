//AJAX, сетевые API fetch, promise
//https://api.thecatapi.com/v1/images/search  cat  array dogs https://random.dog/doggos https://random.dog/  https://dog.ceo/api/breeds/image/random

function createImg(url){
    let card = document.getElementById("fch").content.cloneNode(true);
    let img = card.querySelector('img');
    img.setAttribute("src", url);
    document.body.appendChild(card);
}


function pars(a){
       
    createImg(a.message);
}
for(let i = 0; i <10; i++){
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(a=>a.json())
    .then(c => pars(c));
}

//function testEvent(event){
//    console.log(event);
//}

//let temp = document.getElementById("tmp").content.cloneNode(true);
//window.addEventListener('mousemove', testEvent);
//let lnk = temp.querySelector("a");
//lnk.addEventListener("click", testEvent);
//document.body.appendChild(temp);
//console.log(lnk);
//BOM коротко
// события два метода назначения обработчика, всплытие и погружение, параметры события объект event
///шаблоны в DOM
//let tmp = document.getElementById("tmp");
//document.body.appendChild(tmp.content.cloneNode(true)); 
//создание объетов в DOM 
//получение элементов DOM и доступ к атрибутам в HTML 5 атрибут data
//let dv1 = document.getElementById("dv1");
//console.log(dv1);
//dv1.setAttribute('data-test', "Абзац"); 
//let atr = dv1.getAttribute('data-test');
//console.log(atr);
// DOM методы работы с DOM
//let h1 = document.querySelector("h1");
//console.log(h1);
//console.log(document.body);
//console.table(document.body.childNodes[0]);

//let el = document.createElement("div");
//el.className = "classBorder";
//document.body.appendChild(el);
//let h1 = document.createElement("h1");
//h1.innerText = "Привет программист!!!";
//el.appendChild(h1);
//el.removeChild(h1);

//классы
/*
class Dog{
    aName = "";
    poroda = "";
    age = 1;
    constructor(Name, poroda,age){
        this.aName = Name;
        this.poroda = poroda;
        this.age = age
    }
  
    speak(){
        console.log(`ГАВ!! Я  ${this.aName} `);
    }
    get aName(){
        return aName;
    }
    get poroda(){
        return poroda;
    }
    get age(){
        return this.age;
    }
    sAge(age){
        if(age <= 0){
            alert("Возраст собаки не может быть равен или меньше нуля!");
        }else{
            this.age = age;
        }
    }
    set aName(Name){
        this.aName = Name;
    }
    set poroda(por){
        this.poroda = por;
    }
}

let sh = new Dog("Шарик", "Двортерьер", 1000);
sh.speak();
console.log(sh.poroda);
sh.sAge(-2);
*/
//строки методы работы со строками, слайсы
//let str = "Привет студентам клуба программистов";
//res = str.slice(5,25);
//console.log(res);
//let arr = str.split(" ");
//let arr =  str.replace("программистов", "вокалистов");
//console.table(arr);
//res = str.toUpperCase();
//console.log(res);
//шаблонные строки
//let Job = "Программист";
//let str2 = `Я работаю ${Job} !`;
//console.log(str2);
//массивы методы массивов (деструктуризация, rest и спред оператор)
//let m = ["Света","Таня", "Валя", "Юля", "Катя", "Маша"];
//console.table(m);
//деструктуризация массива
//let [Sveta, Tana, Vala, Ula, Ket, Masha] = m;
//console.log(Vala);
//методы массива
//m.forEach((a)=>console.log(a));/*
/*
let r = m.filter(str=>{
    return (str.search("[я]") != -1)
});
console.table(r);
*/
//Объекты создание и работа с объектами, методы объектов, деструктуризация, копирование обектов
/*
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

let {Aname, poroda, age} = Bob;
console.log(Aname);
console.log(poroda);
console.log(age);

function showData({Aname, poroda, age}){
    console.log("Имя :");
    console.log(Aname);
    console.log("Порода :");
    console.log(poroda);
    console.log("Возраст :");
    console.log(age);
} 


console.log(Bob.Aname);
console.log(f);
speak(sharik);
speak(Bob);
speak(Hourse)

showData(Bob);
*/

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
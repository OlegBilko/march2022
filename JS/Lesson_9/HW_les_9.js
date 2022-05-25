
/*Все робити за допомоги js.

/!*- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*!/*/


/*const divElement = document.createElement('div');

divElement.innerHTML = 'divElement';

divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');

divElement.style.backgroundColor = 'yellow';
divElement.style.color = 'blue';
divElement.style.fontSize = '50px';
divElement.style.marginBottom = '5px';

document.body.appendChild(divElement);

const divElementClone = divElement.cloneNode(true);

document.body.append(divElementClone);*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*- Є масив:
    ['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.*/

/*const menu = document.getElementsByClassName('menu') [0];

const arr = ['Main','Products','About us','Contacts'];

for (const item of arr) {
    const lishka = document.createElement('li');
    lishka.innerHTML = item;
    menu.append(lishka);
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    const singleBlock = document.createElement("div");
    singleBlock.innerHTML = `course:${element.title} - duration: ${element.monthDuration}`
    document.body.appendChild(singleBlock);
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
    в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.*/

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
        const divka = document.createElement("div");
        divka.classList.add('item');
        divka.style.border = '2px solid green';
        divka.style.marginBottom = '5px';

        const h1 = document.createElement("h1");
        h1.classList.add('heading');
        h1.innerHTML = `Course: ${element.title}`;

        const p = document.createElement("p");
        p.classList.add('description');
        p.innerHTML = `Duration:${element.monthDuration} months`;

        divka.append(h1,p);

        document.body.appendChild(divka);*/
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
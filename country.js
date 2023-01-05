'use strict'
let index = 0
const nextButton = document.getElementById("nextCountry");
const previousButton = document.getElementById("previousCountry");
const addCountrys = document.getElementById("add-country");

const countries = [
        {
            name: 'Sweden',
            capital: 'Stockholm',
            population: '10 millions',
            countryflag: 'sweden.jpg',
        },
        {
            name: 'Croatia',
            capital: 'Zagreb',
            population: '4 million',
            countryflag: 'croatia.jpg',
        },
        {
            name: 'Italy',
            capital: 'Rome',
            population: '60 million',
            countryflag: 'italy.jpg',
        },
        {
            name: 'Canada',
            capital: 'Ottawa',
            population: '38 million',
            countryflag: 'canada.jpg',
        },
        {
            name: 'Jamaica',
            capital: 'Kingston',
            population: '3 million',
            countryflag: 'jamaica.jpg',
        },
];
        const name = document.getElementById("name");
        name.innerText = countries[index].name
        const capital = document.getElementById("capital");
        capital.innerText = countries[index].capital
        const population = document.getElementById("population");
        population.innerText = countries[index].population
        const countryflag = document.getElementById("countryflag");
        countryflag.setAttribute('src', countries[index].countryflag);

    function nextFunction() {
        if(index !== countries.length-1){
            index = index+1
            const name = document.getElementById("name");
            name.innerText = countries[index].name
            const capital = document.getElementById("capital");
            capital.innerText = countries[index].capital
            const population = document.getElementById("population");
            population.innerText = countries[index].population
            const countryflag = document.getElementById("countryflag");
            countryflag.setAttribute('src', countries[index].countryflag);
        }
       
    };
    
    function prevFunction() {
        if(index !== 0){
        index = index-1
        const name = document.getElementById("name");
        name.innerText = countries[index].name
        const capital = document.getElementById("capital");
        capital.innerText = countries[index].capital
        const population = document.getElementById("population");
        population.innerText = countries[index].population
        const countryflag = document.getElementById("countryflag");
        countryflag.setAttribute('src', countries[index].countryflag);
    }
    };

    nextButton.addEventListener("click", nextFunction);
    previousButton.addEventListener("click", prevFunction);
    addCountrys.addEventListener("click", addCountry);
    
    function addCountry (e) {
        e.preventDefault();
        let newCountryInfo = {
            name: document.getElementById("name").value,
            capital: document.getElementById("name").value,
            population: document.getElementById("name").value,
            countryflag: document.getElementById("name").value,
        }
        
        countries.push(newCountryInfo);
        document.forms[0].reset();
    };
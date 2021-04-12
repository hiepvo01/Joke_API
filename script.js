/* jshint esversion: 8 */
'use strict';

const BASE_URL = "https://vohi01.pythonanywhere.com/api/v1/jokes";

async function requestJoke() {
    let url = "";
    let jokeCategory = document.querySelector("#category");
    let jokeLanguage = document.querySelector("#language");
    let jokeNumber = document.querySelector("#number");
    let jokeId = document.querySelector("#id");

    if(jokeId.value != ""){
        jokeNumber.innerText = "";
        url = BASE_URL + "?"+ "category=" + jokeCategory.value + "&"+ "language=" + jokeLanguage.value + "&" + "id=" + jokeId.value;
    } else {
        url = BASE_URL + "?"+ "category=" + jokeCategory.value + "&"+ "language=" + jokeLanguage.value + "&" + "number=" + jokeNumber.value;
    }


    return await fetch(url)
    .then(response => response.json())
    .then(json => {
        let jokeOl = document.querySelector("#jokes_result");
        jokeOl.innerHTML = ""
        if(json["jokes"] != "Joke ID is too big!!"){
            for(let joke of json["jokes"]) {
                var item = document.createElement('li');
                item.innerHTML = joke;
                jokeOl.appendChild(item);
            }
        } else {
            jokeOl.innerHTML = json["jokes"]
        }
    })
}
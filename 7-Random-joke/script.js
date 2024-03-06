const textBox = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist";

let getJoke = ()=>{
    textBox.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        textBox.classList.add("fade");
        if(item.joke === undefined)
            getJoke();
        textBox.textContent = `${item.joke}`;
    });
}
getJoke();

btn.addEventListener("click", getJoke);
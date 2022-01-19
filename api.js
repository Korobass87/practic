
let sub = document.querySelector(".submit")
let input = document.querySelector(".input")
const telo = document.querySelector('.js-card-container')
let numOfPeople = 1
console.log(sub);
console.log(input);

sub.addEventListener('click', onSeach)

function onSeach(event) {
    event.preventDefault()
    numOfPeople = Number(input.value)
    seachPeople(numOfPeople)
}
 
function seachPeople(people) {
    fetch(`https://swapi.dev/api/people/${people}/`)
        .then((x) => x.json())
        .then((x)=>renderSw(x))
    
}

function renderSw(sw) {
    let z = sw.films
    let card1 = 
    `<div class="card">
  <div class="card-body">
    <h2 class="card-title"> Имя: ${sw.name} </h2>
    <p class="card-text"> Вес: ${sw.mass} </p>
    <p class="card-text"> Рост: ${sw.height} </p>

    <p class="card-text"> <b> Фильмы</b></p>
    <ul class="list-group"> </ul>`
    let card2 = "" 
    let lili =[]
    for (let i = 0; i < z.length; i += 1) {
            
            
            let a = fetch(z[i])
                .then((y) => (y.json()))
                .then((y) => (y.title))
            
        a
            .then(p => check(p))
        
        
        function check(p) {
            if (i === z.length - 1) {
                lili.push(p)
                pushing(lili)
            } else {
                lili.push(p)
            }
        } 
    }
    function pushing(p) {
        
        console.log(lili)
        card2 = lili.map(x => `<li>${x}</li>`).join("")
        console.log(card2);
        const ul = document.querySelector('.list-group')
        console.log(ul)
        ul.innerHTML =  card2 
       
    }
    let card3 = `</ul>
        </div>
        </div>`
    
    
        telo.innerHTML = card1 + card3;
    
}

    

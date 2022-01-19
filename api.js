
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
        .then((x)=>renderPokemonCard(x))
    
}

function renderPokemonCard(sw) {
    let z = sw.films
    let card1 = 
    `<div class="card">
  <div class="card-body">
    <h2 class="card-title"> Имя: ${sw.name} </h2>
    <p class="card-text"> Вес: ${sw.mass} </p>
    <p class="card-text"> Рост: ${sw.height} </p>

    <p class="card-text"> <b> Фильмы</b></p>
    <ul class="list-group"> </ul>`
    // let card2 = 
    let lili =[]
    for (let i = 0; i < z.length; i += 1) {
            
            
            let a = fetch(z[i])
                .then((y) => (y.json()))
                .then((y) => (y.title))
            
        a
            .then(p => lili.push(p))
            
            
           
                            
          
    }
    console.log(lili)
    
    

        
        
    let card3 = `</ul>
        </div>
        </div>`

    
    
  telo.innerHTML = card1 + card3;
}

    

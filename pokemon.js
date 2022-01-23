let startPoint = 0
let limit = 10
let maxPage = 0
const select = document.querySelector(".select")
pokemonBox = document.querySelector('.pokemons')
const arrayForMarkup = []
const pagBox = document.querySelector('.paginationBtn')
currentPage=1


start(startPoint, limit)
function start(startPointX, limitX) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limitX}&offset=${startPointX}`)
        .then(pok => pok.json())
        .then(data => {
            
            
            
            let arrayPokemonUrl = (data.results).map(dat => dat.url)
            pokemonBox.innerHTML = ""

            arrayPokemonUrl.forEach(el => {
                
                getPokemonById(Number.parseInt(el.slice(34, (el.length - 1))))
            })

            maxPage = Math.ceil(data.count / limitX)
            murkupBtn(maxPage)
              
        })
}


function getPokemonById(id) {
    
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(pok => pok.json())
            .then(data => {
        
    markup(data)
    })
}
    
function markup(data) {
    
    let pokemonCard = `
    <div class="card">
      <img src="${data.sprites.front_default}" width=200 alt="${data.name}" />
      <h2>${data.name}</h2>
      <p>Expirients: ${data.base_experience}</p>
      <p>weight: ${data.weight}</p>
    </div>
    `
    pokemonBox.insertAdjacentHTML('beforeend', pokemonCard);

    

}

select.addEventListener("change", (e) => {
    limit = Number(e.target.value);
    console.log(startPoint);
    currentPage = Math.floor(startPoint / limit + 1)
    startPoint < limit ? start(0, limit) : start(startPoint, limit)
 
})

function murkupBtn(maxPage) {
    
    arrayBtn = (Array(maxPage).fill(0)).map((el, idx) => { return `<button class=${idx + 1 === Number(currentPage) ? "active" : "" } >${idx + 1}</button>` })
    let xs = []
    console.log(currentPage)
    if (Number(currentPage) > 5) {
        xs = arrayBtn.slice(Number(currentPage) - 5, 4 + Number(currentPage))
    } else { xs = arrayBtn.slice(0, Number(currentPage) + 5) }
    
    pagBox.innerHTML= ''
    pagBox.innerHTML = (currentPage >= 6 ? arrayBtn[0] + "..." : "") + xs.join('') + (currentPage >= arrayBtn.length - 5 ? "" : "..." + arrayBtn[arrayBtn.length - 1]  ) 
        
    
    pagBox.addEventListener('click', changePage)
    
    
}

function changePage(e) {
         
        if (e.target === e.currentTarget) {
            console.log("no");
        } else {
            startPoint = e.target.textContent * limit - limit
currentPage =  e.target.textContent  
            start(startPoint, limit)
        }
        
    }




// Carne: 400g por pessoa. Mais de 6 horas - 650g
// Cerveja - 1200ml por pessoa. Mais de 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa. Mais de 6 horas 1500ml

//crianças valem por 0.5
//Adultos que bebem regrigrante - 1500ml por pessoa. Mais de 6 horas 3000ml

// == == == Abrir e fechar o Modal == == == //
const Modal = {
  open() {
    // Abrir modal
    // Adicionar a classe active ao modal
    document.querySelector('.modal-overlay').classList.add('active')

  },
  close() {
    // Fechar Modal
    // Remover a classe active do Modal
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

let inputAdultsDrinkBeer = document.getElementById("adultsDrinkBeer")
let inputAdultsDrinkSoda = document.getElementById("adultsDrinkSoda")
let inputChildrens = document.getElementById("childrens")
let inputDuration = document.getElementById("duration")

let results = document.querySelector(".modal-overlay")

function calculate() {
  let adultsBeer = inputAdultsDrinkBeer.value || 0
  let adultsSoda = inputAdultsDrinkSoda.value || 0
  let childrens = inputChildrens.value || 0
  let duration = inputDuration.value || 0

  let totalAdultsMeat = parseInt(adultsSoda) + parseInt(adultsBeer)
  console.log(totalAdultsMeat)
  let totalMeat = (totalAdultsMeat * meatPerPerson(duration)) + (childrens * meatPerPerson(duration)/2)
  console.log(totalMeat)
  let totalBeer = (adultsBeer * beerPerPerson(duration))
  let totalSoda = (adultsSoda * sodaPerAdult(duration)) + (childrens * sodaPerChildren(duration)/2)

  results.innerHTML = `
    <div class="results">
      <p>Para seu churrasco, você vai precisar de:</p>
      <ul class="ingredients">
        <li><img src="images/ham.png" alt="Pedaço de carne"><span>${totalMeat/1000}kg de carne</span></li>
        <li><img src="images/beer.png" alt="Caneco de cerveja"><span>${Math.ceil(totalBeer/355)} latas de cerveja (355ml)</span></li>
        <li><img src="images/soda.png" alt="lata de refrigerante"><span>${Math.ceil(totalSoda/2000)} garrafas de refrigerante (2 litros)</span></li>
      </ul>
      <button class="btn" onclick="Modal.close()">Voltar</button>
    </div>
  `

  Modal.open()
}

function meatPerPerson(duration) {
  if(duration >= 6) {
    return 650
  } 
  else {
    return 400
  }
}

function beerPerPerson(duration) {
  if(duration >= 6) {
    return 2000
  } 
  else {
    return 1200
  }
}

function sodaPerChildren(duration) {
  if(duration >= 6) {
    return 1500
  } 
  else {
    return 1000
  }
}

function sodaPerAdult(duration) {
  if(duration >= 6) {
    return 2600
  } 
  else {
    return 2000
  }
}

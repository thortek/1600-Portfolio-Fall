import { films } from '../data/films.js'

const main = document.querySelector('main')


for (let i = 0; i < 7; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[i].title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
    console.log(films[i].title)
  }

/* films.forEach(film => {
    console.log(film.title)
    let newTitle = main.appendChild(document.createElement("h1"))
    newTitle.textContent = film.title
}) */

/* people.forEach(person => {
    console.log(person.name)
    let personImg = document.createElement('img')
    personImg.src = "https://starwars-visualguide.com/assets/img/characters/10.jpg"
    main.appendChild(personImg)
}) */

//https://starwars-visualguide.com/assets/img/films/7.jpg



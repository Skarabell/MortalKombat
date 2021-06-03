const attack = () => {
    console.log(hero.name + " Fight...")
}

const hero = {
    name: "",
    hp: "100%",
    img: "",
    weapon: [],
    attack: {}
}

const scorpion = {
    name: "Scorpion",
    hp: "100%",
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: [],
    attack: {}
}

const subZero = {
    name: "Sub-Zero",
    hp: "100%",
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: [],
    attack: {}
}


function createPlayer(player, hero) {
    const $player = document.createElement("div")
    $player.classList.add(player)

    const $progressbar = document.createElement("div")
    $progressbar.classList.add("progressbar")
    $player.appendChild($progressbar)

    const $life = document.createElement("div")
    $life.classList.add("life")
    $life.style.width = hero.hp
    $progressbar.appendChild($life)

    const $name = document.createElement("div")
    $name.classList.add("name")
    $name.innerText = hero.name
    $progressbar.appendChild($name)

    const $character = document.createElement("div")
    $character.classList.add("character")
    $player.appendChild($character)

    const $img = document.createElement("img")
    $img.src = hero.img
    $character.appendChild($img)

    const $root = document.querySelector(".arenas")
    $root.appendChild($player)
}

createPlayer("player1", scorpion)
createPlayer("player2", subZero)
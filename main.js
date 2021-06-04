const $arenas = document.querySelector(".arenas")
const $randomButton = document.querySelector(".button")

const player1 = {
    player: 1,
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    attack: () => {
        console.log(this.name + " Fight...")
    }
}

const player2 = {
    player: 2,
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    attack: () => {
        console.log(this.name + " Fight...")
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}

function createPlayer(classPlayer, hero) {
    const $player = createElement("div", "player"+hero.player)
    const $progressbar = createElement("div", "progressbar")
    const $life = createElement("div", "life")
    const $name = createElement("div", "name")
    const $character = createElement("div", "character")
    const $img = createElement("img")

    $life.style.width = hero.hp + "%"
    $name.innerText = hero.name
    $img.src = hero.img

    $progressbar.appendChild($name)
    $progressbar.appendChild($life)
    $character.appendChild($img)
    $player.appendChild($progressbar)
    $player.appendChild($character)
    return $player
}

function changeHP(player) {
    const $playerLife = document.querySelector(".player"+ player.player +" .life")
    player.hp -= (Math.ceil(Math.random() * 20))
    $playerLife.style.width = player.hp + "%"
    if (player1.hp <=0) {
        $arenas.appendChild(playerWin(player2.name))
    } else if (player2.hp <= 0) {
        $arenas.appendChild(playerWin(player1.name))
    }
    if (player.hp < 0) {
        $playerLife.style.width = "0%"
        $randomButton.disabled = true
    }
}

function playerWin(name) {
    const $loseTitle = createElement("div", "loseTitle")
    $loseTitle.innerText = name + " win"
    return $loseTitle
}

$randomButton.addEventListener("click", function () {
    changeHP(player1)
    changeHP(player2)
})

$arenas.appendChild(createPlayer(player1, player1))
$arenas.appendChild(createPlayer(player2, player2))

function pulisci () {
    blocco1.delete()
    blocco2.delete()
    blocco3.delete()
    blocco4.delete()
    blocco5.delete()
    blocco6.delete()
    blocco7.delete()
    blocco8.delete()
    personaggio.delete()
    portale.delete()
}
// permette di far spostare il personaggio in dietro di un blocco
input.onGesture(Gesture.LogoUp, function () {
    personaggio.change(LedSpriteProperty.Y, 1)
    if (personaggio.isTouching(blocco1) || (personaggio.isTouching(blocco2) || (personaggio.isTouching(blocco3) || (personaggio.isTouching(blocco4) || (personaggio.isTouching(blocco5) || (personaggio.isTouching(blocco6) || (personaggio.isTouching(blocco7) || personaggio.isTouching(blocco8)))))))) {
        personaggio.change(LedSpriteProperty.Y, -1)
    }
})
// permette di far spostare il personaggio a destra di un blocco
input.onGesture(Gesture.TiltRight, function () {
    personaggio.change(LedSpriteProperty.X, 1)
    if (personaggio.isTouching(blocco1) || (personaggio.isTouching(blocco2) || (personaggio.isTouching(blocco3) || (personaggio.isTouching(blocco4) || (personaggio.isTouching(blocco5) || (personaggio.isTouching(blocco6) || (personaggio.isTouching(blocco7) || personaggio.isTouching(blocco8)))))))) {
        personaggio.change(LedSpriteProperty.X, -1)
    }
})
// inizializzo lo scenario 1, quindi crea tutti i blocchi dei muri, il personaggio e il portale
function scenario2 () {
    blocco1 = game.createSprite(1, 4)
    blocco2 = game.createSprite(1, 3)
    blocco3 = game.createSprite(3, 3)
    blocco4 = game.createSprite(1, 2)
    blocco5 = game.createSprite(3, 2)
    blocco6 = game.createSprite(1, 1)
    blocco7 = game.createSprite(3, 1)
    blocco8 = game.createSprite(3, 0)
    personaggio = game.createSprite(0, 4)
    portale = game.createSprite(4, 0)
}
// permette di spostare il personaggio in avanti di un blocco
input.onGesture(Gesture.LogoDown, function () {
    personaggio.change(LedSpriteProperty.Y, -1)
    if (personaggio.isTouching(blocco1) || (personaggio.isTouching(blocco2) || (personaggio.isTouching(blocco3) || (personaggio.isTouching(blocco4) || (personaggio.isTouching(blocco5) || (personaggio.isTouching(blocco6) || (personaggio.isTouching(blocco7) || personaggio.isTouching(blocco8)))))))) {
        personaggio.change(LedSpriteProperty.Y, 1)
    }
})
// inizializzo lo scenario 1, quindi crea tutti i blocchi dei muri, il personaggio e il portale
function scenario1 () {
    blocco1 = game.createSprite(3, 4)
    blocco2 = game.createSprite(0, 3)
    blocco3 = game.createSprite(1, 3)
    blocco4 = game.createSprite(3, 3)
    blocco5 = game.createSprite(3, 2)
    blocco6 = game.createSprite(3, 1)
    blocco7 = game.createSprite(2, 1)
    blocco8 = game.createSprite(1, 1)
    personaggio = game.createSprite(0, 4)
    portale = game.createSprite(4, 4)
}
// inizializzo lo scenario 1, quindi crea tutti i blocchi dei muri, il personaggio e il portale
function scenario4 () {
    blocco1 = game.createSprite(2, 4)
    blocco2 = game.createSprite(0, 3)
    blocco3 = game.createSprite(2, 3)
    blocco4 = game.createSprite(3, 3)
    blocco5 = game.createSprite(3, 2)
    blocco6 = game.createSprite(1, 1)
    blocco7 = game.createSprite(3, 0)
    blocco8 = game.createSprite(4, 0)
    personaggio = game.createSprite(0, 4)
    portale = game.createSprite(3, 4)
}
function lampeggia (sprite: game.LedSprite, x: number, y: number) {
    x = sprite.get(LedSpriteProperty.X)
    y = sprite.get(LedSpriteProperty.Y)
    sprite.delete()
    basic.pause(500)
    portale = game.createSprite(x, y)
}
// permette di far spostare il personaggio a sinistra di un blocco
input.onGesture(Gesture.TiltLeft, function () {
    personaggio.change(LedSpriteProperty.X, -1)
    if (personaggio.isTouching(blocco1) || (personaggio.isTouching(blocco2) || (personaggio.isTouching(blocco3) || (personaggio.isTouching(blocco4) || (personaggio.isTouching(blocco5) || (personaggio.isTouching(blocco6) || (personaggio.isTouching(blocco7) || personaggio.isTouching(blocco8)))))))) {
        personaggio.change(LedSpriteProperty.X, 1)
    }
})
// inizializzo lo scenario 1, quindi crea tutti i blocchi dei muri, il personaggio e il portale
function scenario3 () {
    blocco1 = game.createSprite(1, 4)
    blocco2 = game.createSprite(3, 4)
    blocco3 = game.createSprite(1, 3)
    blocco4 = game.createSprite(3, 2)
    blocco5 = game.createSprite(0, 1)
    blocco6 = game.createSprite(1, 1)
    blocco7 = game.createSprite(2, 1)
    blocco8 = game.createSprite(3, 1)
    personaggio = game.createSprite(0, 4)
    portale = game.createSprite(0, 0)
}
let y = 0
let x = 0
let portale: game.LedSprite = null
let personaggio: game.LedSprite = null
let blocco8: game.LedSprite = null
let blocco7: game.LedSprite = null
let blocco6: game.LedSprite = null
let blocco5: game.LedSprite = null
let blocco4: game.LedSprite = null
let blocco3: game.LedSprite = null
let blocco2: game.LedSprite = null
let blocco1: game.LedSprite = null
let scena = 1
scenario1()
basic.forever(function () {
    if (scena == 1) {
        lampeggia(portale, 4, 4)
    }
    if (scena == 2) {
        lampeggia(portale, 4, 0)
    }
    if (scena == 3) {
        lampeggia(portale, 0, 0)
    }
    if (scena == 4) {
        lampeggia(portale, 3, 4)
    }
    if (personaggio.isTouching(portale)) {
        basic.showIcon(IconNames.Yes)
        pulisci()
        scena += 1
        if (scena == 2) {
            scenario2()
        }
        if (scena == 3) {
            scenario3()
        }
        if (scena == 4) {
            scenario4()
        }
    }
})

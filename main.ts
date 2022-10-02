input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let N = 0; N <= 4; N++) {
        for (let index = 0; index <= 4; index++) {
            led.plot(N, index)
        }
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let N = 0; N <= 4; N++) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, N)
        }
        basic.pause(500)
    }
})

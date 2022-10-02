basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 4; index++) {
            led.plot(0, index)
        }
    }
})

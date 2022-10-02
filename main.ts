basic.forever(function on_forever() {
    for (let N = 0; N < 5; N++) {
        for (let index = 0; index < 5; index++) {
            led.plot(N, index)
        }
    }
})

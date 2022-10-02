def on_forever():
    for N in range(5):
        for index in range(5):
            led.plot(N, index)
basic.forever(on_forever)

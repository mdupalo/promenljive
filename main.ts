basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(0, 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.unplot(0, 0)
    }
})

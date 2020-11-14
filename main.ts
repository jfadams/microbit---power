input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    power = -1
})
input.onGesture(Gesture.Shake, function () {
    power += randint(1, 5) / 10
    LEDpowerY = Math.floor(power / 5)
    LEDpowerX = power - LEDpowerY * 5
})
let LEDpowerX = 0
let LEDpowerY = 0
let power = 0
basic.clearScreen()
power = -1
basic.forever(function () {
    if (power > -1 && power <= 24) {
        for (let indexY = 0; indexY <= LEDpowerY; indexY++) {
            for (let indexX = 0; indexX <= LEDpowerX; indexX++) {
                led.plot(indexX, indexY)
            }
        }
    } else if (power > 24) {
        for (let index = 0; index < 4; index++) {
            basic.clearScreen()
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(100)
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
        }
        power = -1
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("MODE 1")
    Mode = 1
    power = -1
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    for (let index = 0; index < 12; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("MODE 2")
    Mode = 2
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
let Mode = 0
basic.clearScreen()
Mode = 1
power = -1
basic.forever(function () {
    if (Mode == 1) {
        if (power > -1 && power <= 25) {
            for (let indexY = 0; indexY <= LEDpowerY; indexY++) {
                for (let indexX = 0; indexX <= LEDpowerX; indexX++) {
                    led.plot(indexX, indexY)
                }
            }
        }
    } else if (Mode == 2) {
        if (power > -1 && power <= 24) {
            for (let indexY = 0; indexY <= LEDpowerY; indexY++) {
                for (let indexX = 0; indexX <= LEDpowerX; indexX++) {
                    led.plot(indexX, indexY)
                }
            }
        } else if (power > 24) {
            music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
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
    }
})

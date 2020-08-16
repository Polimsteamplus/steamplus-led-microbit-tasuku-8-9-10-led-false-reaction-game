input.onPinPressed(TouchPin.P0, function () {
    led.enable(true)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    running = false
    false_start = false
    basic.pause(1000 + randint(0, 2000))
    if (!(false_start)) {
        start = input.runningTime()
        running = true
        led.stopAnimation()
        basic.clearScreen()
        led.plot(randint(0, 4), randint(0, 4))
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P8, 1023)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.analogWritePin(AnalogPin.P9, 1023)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P9, 0)
        pins.analogWritePin(AnalogPin.P10, 1023)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P10, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P8, 1023)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P9, 1023)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P10, 1023)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.analogWritePin(AnalogPin.P9, 0)
        pins.analogWritePin(AnalogPin.P10, 0)
        basic.pause(500)
        for (let index = 0; index < 2; index++) {
            pins.analogWritePin(AnalogPin.P8, 1023)
            pins.analogWritePin(AnalogPin.P9, 1023)
            pins.analogWritePin(AnalogPin.P10, 1023)
            basic.pause(200)
            pins.analogWritePin(AnalogPin.P8, 0)
            pins.analogWritePin(AnalogPin.P9, 0)
            pins.analogWritePin(AnalogPin.P10, 0)
            basic.pause(500)
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . # . #
            . . . . .
            `)
    }
    led.enable(false)
})
input.onButtonPressed(Button.AB, function () {
    led.enable(true)
    basic.showString("Hello!")
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Ghost)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P4, 1)
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P6, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P7, 1)
        pins.digitalWritePin(DigitalPin.P10, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P6, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P7, 0)
        pins.digitalWritePin(DigitalPin.P10, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P4, 1)
        pins.digitalWritePin(DigitalPin.P9, 1)
        pins.digitalWritePin(DigitalPin.P6, 1)
        pins.digitalWritePin(DigitalPin.P7, 1)
        pins.digitalWritePin(DigitalPin.P10, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P6, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P7, 0)
        pins.digitalWritePin(DigitalPin.P10, 0)
    }
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
    }
    led.enable(false)
})
let end = 0
let start = 0
let false_start = false
let running = false
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Happy)
led.enable(false)

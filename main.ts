let entercounter = 0
let cm = 0
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    ) < 127 && sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    ) > 20) {
        if (entercounter == 10) {
            music.play(music.stringPlayable("C E D F E G F A ", 120), music.PlaybackMode.UntilDone)
            entercounter = 0
        }
        entercounter += 1
        basic.showNumber(entercounter)
        basic.pause(5000)
    }
})
basic.forever(function () {
    cm = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    if (cm > 5 && cm < 100) {
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
basic.forever(function () {
    if (!(cm > 5 && cm < 100)) {
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(10000)
    }
})

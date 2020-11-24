input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
})

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(1 + index)
        basic.pause(1000)
    }
    St_Sch_Pa = randint(0, 2)
    if (St_Sch_Pa == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (St_Sch_Pa == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # #
            . . # . .
            . . . . .
            `)
    } else if (St_Sch_Pa == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
let St_Sch_Pa = 0
music.playMelody("C D E F G A B C5 ", 200)
basic.forever(function () {
	
})

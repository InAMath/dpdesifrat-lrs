input.onButtonPressed(Button.A, function () {
    basic.showString("" + (abeceda[brojacporuka]))
    poruka = brojacporuka
    brojacporuka = (brojacporuka + 1) % 26
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (abeceda[poruka]))
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(500)
    basic.showString("" + (LRS[randint(0, 2)]))
})
input.onButtonPressed(Button.B, function () {
    a = brojaca
    basic.showNumber(a)
    brojaca = (brojaca + 1) % 26
})
let a = 0
let poruka = 0
let brojacporuka = 0
let brojaca = 0
let LRS: string[] = []
let abeceda: string[] = []
abeceda = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
LRS = ["L", "R", "S"]
let dobara = 0
let ainverz = 0
brojaca = 0
let b = 2
brojacporuka = 0

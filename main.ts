input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Score = 0
    time__total_amount_of_milliseconds = 0
    basic.pause(1000)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    for (let index = 0; index < 10; index++) {
        picture = randint(0, 2)
        basic.pause(500 + randint(0, 1000))
        if (picture == 0) {
            basic.showIcon(IconNames.Fabulous)
        } else if (picture == 1) {
            basic.showIcon(IconNames.Pitchfork)
        } else {
            basic.showIcon(IconNames.Snake)
        }
        
        time = 0
        while (!input.pinIsPressed(TouchPin.P0) && (!input.pinIsPressed(TouchPin.P2) && !input.pinIsPressed(TouchPin.P1))) {
            basic.pause(50)
            time += 50
        }
        if (input.pinIsPressed(TouchPin.P0)) {
            pin_chosen = 0
        } else if (input.pinIsPressed(TouchPin.P1)) {
            pin_chosen = 1
        } else if (input.pinIsPressed(TouchPin.P2)) {
            pin_chosen = 2
        }
        
        if (pin_chosen == picture) {
            Score += 1
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(time)
            basic.showIcon(IconNames.Yes)
            time__total_amount_of_milliseconds = time__total_amount_of_milliseconds + time
        } else {
            basic.showIcon(IconNames.No)
        }
        
    }
    basic.showNumber(Score)
    basic.pause(2000)
    if (Score == 10) {
        basic.showNumber(time__total_amount_of_milliseconds)
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showNumber(time__total_amount_of_milliseconds)
})
let pin_chosen = 0
let time = 0
let picture = 0
let time__total_amount_of_milliseconds = 0
let Score = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)

def on_button_pressed_a():
    global Score, time__total_amount_of_milliseconds, picture, time, pin_chosen
    Score = 0
    time__total_amount_of_milliseconds = 0
    basic.pause(1000)
    basic.show_number(3)
    basic.show_number(2)
    basic.show_number(1)
    for index in range(10):
        picture = randint(0, 2)
        basic.pause(500 + randint(0, 1000))
        if picture == 0:
            basic.show_icon(IconNames.FABULOUS)
        elif picture == 1:
            basic.show_icon(IconNames.PITCHFORK)
        else:
            basic.show_icon(IconNames.SNAKE)
        time = 0
        while not (input.pin_is_pressed(TouchPin.P0)) and (not (input.pin_is_pressed(TouchPin.P2)) and not (input.pin_is_pressed(TouchPin.P1))):
            basic.pause(50)
            time += 50
        if input.pin_is_pressed(TouchPin.P0):
            pin_chosen = 0
        elif input.pin_is_pressed(TouchPin.P1):
            pin_chosen = 1
        elif input.pin_is_pressed(TouchPin.P2):
            pin_chosen = 2
        if pin_chosen == picture:
            Score += 1
            basic.show_icon(IconNames.YES)
            basic.pause(500)
            basic.clear_screen()
            basic.pause(100)
            basic.show_number(time)
            basic.show_icon(IconNames.YES)
            time__total_amount_of_milliseconds = time__total_amount_of_milliseconds + time
        else:
            basic.show_icon(IconNames.NO)
    basic.show_number(Score)
    basic.pause(2000)
    if Score == 10:
        basic.show_number(time__total_amount_of_milliseconds)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(time__total_amount_of_milliseconds)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

pin_chosen = 0
time = 0
picture = 0
time__total_amount_of_milliseconds = 0
Score = 0
basic.show_leds("""
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    """)
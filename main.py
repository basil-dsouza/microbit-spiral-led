def on_button_pressed_b():
    for x1 in [2, 1]:
        basic.pause(100)
        led.unplot(x1, 2)
    
    for x2 in [1, 2]:
        basic.pause(100)
        led.unplot(x2, 3)

    for y1 in [3, 2]:
        basic.pause(100)
        led.unplot(3, y1)

    for x3 in [3, 2, 1]:
        basic.pause(100)
        led.unplot(x3, 1)

    for y2 in [1, 2, 3]:
        basic.pause(100)
        led.unplot(0, y2)

    for x4 in[0, 1, 2, 3, 4]:
        basic.pause(100)
        led.unplot(x4, 4)

    for y3 in [4, 3, 2, 1]:
        basic.pause(100)
        led.unplot(4, y3)

    for x5 in [4, 3, 2, 1, 0]:
        basic.pause(100)
        led.unplot(x5, 0)

input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_a():
    basic.clear_screen()
    for x in range(5):
        led.plot(x, 0)
        basic.pause(100)
    for y in range(4):
        led.plot(4, y+1)
        basic.pause(100)
    for x in range(4):
        led.plot(3-x, 4)
        basic.pause(100)
    for y in range(3):
        led.plot(0, 3-y)
        basic.pause(100)
    for x in range(4):
        led.plot(x, 1)
        basic.pause(100)
    for y in range(2):
        led.plot(3,2+y)
        basic.pause(100)
    for x in range(2):
        led.plot(2-x, 3)
        basic.pause(100)
    for x in range(2):
        led.plot(1+x, 2)
        basic.pause(100)
                        
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    
        on_button_pressed_a()
        on_button_pressed_b()

def on_logo_event_pressed():
    on_button_pressed_a()
    on_button_pressed_b()
    
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)

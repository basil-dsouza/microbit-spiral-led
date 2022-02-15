function on_button_pressed_b() {
    for (let x1 of [2, 1]) {
        basic.pause(100)
        led.unplot(x1, 2)
    }
    for (let x2 of [1, 2]) {
        basic.pause(100)
        led.unplot(x2, 3)
    }
    for (let y1 of [3, 2]) {
        basic.pause(100)
        led.unplot(3, y1)
    }
    for (let x3 of [3, 2, 1]) {
        basic.pause(100)
        led.unplot(x3, 1)
    }
    for (let y2 of [1, 2, 3]) {
        basic.pause(100)
        led.unplot(0, y2)
    }
    for (let x4 of [0, 1, 2, 3, 4]) {
        basic.pause(100)
        led.unplot(x4, 4)
    }
    for (let y3 of [4, 3, 2, 1]) {
        basic.pause(100)
        led.unplot(4, y3)
    }
    for (let x5 of [4, 3, 2, 1, 0]) {
        basic.pause(100)
        led.unplot(x5, 0)
    }
}

input.onButtonPressed(Button.B, on_button_pressed_b)
function on_button_pressed_a() {
    let x: number;
    let y: number;
    basic.clearScreen()
    for (x = 0; x < 5; x++) {
        led.plot(x, 0)
        basic.pause(100)
    }
    for (y = 0; y < 4; y++) {
        led.plot(4, y + 1)
        basic.pause(100)
    }
    for (x = 0; x < 4; x++) {
        led.plot(3 - x, 4)
        basic.pause(100)
    }
    for (y = 0; y < 3; y++) {
        led.plot(0, 3 - y)
        basic.pause(100)
    }
    for (x = 0; x < 4; x++) {
        led.plot(x, 1)
        basic.pause(100)
    }
    for (y = 0; y < 2; y++) {
        led.plot(3, 2 + y)
        basic.pause(100)
    }
    for (x = 0; x < 2; x++) {
        led.plot(2 - x, 3)
        basic.pause(100)
    }
    for (x = 0; x < 2; x++) {
        led.plot(1 + x, 2)
        basic.pause(100)
    }
}

input.onButtonPressed(Button.A, on_button_pressed_a)
function on_forever() {
    on_button_pressed_a()
    on_button_pressed_b()
}

input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    on_button_pressed_a()
    on_button_pressed_b()
})

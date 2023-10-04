/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara Tyman
 * Created on: Sep 2023
 * This program allows you to play the cookie clicker game on a microbit
*/

basic.showIcon(IconNames.Happy)
basic.clearScreen()

// variable
let cookie: number = 0

// input
input.onButtonPressed(Button.A, function () {
  cookie = (cookie + 1)
  basic.showNumber(cookie)
})

// output
input.onButtonPressed(Button.B, function () {
  cookie = 0
  basic.showNumber(cookie)
})

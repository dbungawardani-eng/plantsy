basic.showIcon(IconNames.Heart)
rekabitUltrasonic.setUltrasonicTrigEcho(RekabitUltrasonicIOPins.p2_p12)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(rekabitSoilMoisture.soilMoistureLevel(RekabitAnalogInPin.P1))
    }
    if (rekabitSoilMoisture.compareAnalog(RekabitAnalogInPin.P1, RekabitAnalogCompareType.MoreThan, 400)) {
        rekabit.setAllRgbPixelsColor(0xff0000)
        basic.showIcon(IconNames.Sad)
        rekabit.runMotor(MotorChannel.M1, MotorDirection.Backward, 82)
        basic.pause(500)
        rekabit.brakeMotor(MotorChannel.M1)
    } else {
        rekabit.setAllRgbPixelsColor(0x00ff00)
        basic.showIcon(IconNames.Happy)
    }
    if (rekabitUltrasonic.compareDistance(RekabitAnalogCompareType.LessThan, 7)) {
        rekabitBigLED.setBigLed(RekabitPortYellowPin.P15, rekabitBigLED.digitalStatePicker(RekabitDigitalIoState.On))
    } else {
        rekabitBigLED.setBigLed(RekabitPortYellowPin.P15, rekabitBigLED.digitalStatePicker(RekabitDigitalIoState.Off))
    }
})

namespace neuralNetwork {
    // Variables globales
    let net = 0;
    let X2 = 0;
    let X1 = 0;
    let w = [-1, 1, 1];  // Pesos iniciales por defecto

    //% block="configura neurona número %neuronNum"
    //% weight=200 color=#ff0000
    export function configuraNeurona(neuronNum: number): void {
        basic.showNumber(neuronNum);
        led.setBrightness(255);
        music.setVolume(255);
        net = 0;
        X1 = 0;
        X2 = 0;
        switch (neuronNum) {
            case 1:
                w = [-1, -1, 1];
                break;
            case 2:
                w = [-1, 1, -1];
                break;
            case 3:
                w = [-1, 1, 1];
                break;
        
            default:
                w = [0, 0, 0];
                break;
        }
    }

    //% block="ejecutar lógica de neurona"
    //% weight=90 color=#ff0000
    export function ejecutarLogicaNeurona(): void {
        X1 = pins.digitalReadPin(DigitalPin.P0);
        X2 = pins.digitalReadPin(DigitalPin.P1);
        net = w[0] + w[1] * X1 + w[2] * X2;

        if (net >= 0) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone);
            pins.digitalWritePin(DigitalPin.P2, 1);
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            pins.digitalWritePin(DigitalPin.P2, 0);
        }
    }
}

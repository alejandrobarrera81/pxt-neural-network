namespace neuralNetwork {
    // Variables globales
    let net = 0;
    let X2 = 0;
    let X1 = 0;
    let w = [-1, 1, 1];  // Pesos iniciales por defecto

    //% block="configura neurona número %neuronNum con pesos %weight0 %weight1 %weight2"
    //% weight=100 color=#0fbc11
    export function configuraNeurona(neuronNum: number, weight0: number, weight1: number, weight2: number): void {
        basic.showNumber(neuronNum);
        w = [weight0, weight1, weight2];
        led.setBrightness(255);
        net = 0;
        X1 = 0;
        X2 = 0;
    }

    //% block="ejecutar lógica de neurona"
    //% weight=90 color=#0fbc11
    export function ejecutarLogicaNeurona(): void {
        X1 = pins.digitalReadPin(DigitalPin.P0);
        X2 = pins.digitalReadPin(DigitalPin.P1);
        net = w[0] + w[1] * X1 + w[2] * X2;

        if (net >= 0) {
            basic.showIcon(IconNames.Sad);
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone);
            pins.digitalWritePin(DigitalPin.P2, 1);
        } else {
            basic.showIcon(IconNames.Heart);
            pins.digitalWritePin(DigitalPin.P2, 0);
        }
    }
}

class SixthPage {
    constructor() {
        this.button29 = createButton("SEE");
        this.button30 = createButton("SEE");
        this.button31 = createButton("SEE");
        this.button32 = createButton("SEE");
    }
    display() {
        this.button29.position(620, 130);
        this.button30.position(620, 170);
        this.button31.position(620, 210);
        this.button32.position(620, 250);

        this.button29.mousePressed(() => {
            if (gameState == 6) {
                gameState = 30;
            }
        });
        this.button30.mousePressed(() => {
            if (gameState == 6) {
                gameState = 31;
            }
        });
        this.button31.mousePressed(() => {
            if (gameState == 6) {
                gameState = 32;
            }
        });
        this.button32.mousePressed(() => {
            if (gameState == 6) {
                gameState = 33;
            }
        });
    }
}
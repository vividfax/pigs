class Pig {

    constructor(x, y, gridSize, fake) {

        this.x = x;
        this.y = y;
        this.gridSize = gridSize;
        this.w = size/gridSize;
        this.fake = fake;

        this.wants = int(random(9))+1;
        this.type = 0;

        this.fed = false;
    }

    update() {

        if (this.fake) return;
    }

    setType(int) {

        if (this.fake) return;

        if (this.wants == int && !this.fed) {
            this.type = 0;
            this.fed = true;
        } else {
            this.type += int;
        }
    }

    display() {

        if (this.fake) return;

        push();
        translate(this.x*this.w+this.w/2, this.y*this.w+this.w/2);

        fill(palette.light);
        ellipse(0, 0, 40);
        fill(palette.black);
        textSize(30);
        text(this.type, 0, 0);
        fill(palette.light);
        if (this.fed) fill(palette.dark);
        text(this.wants, 0, -30);

        pop();
    }
}
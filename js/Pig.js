class Pig {

    constructor(x, y, gridSize, fake) {

        this.x = x;
        this.y = y;
        this.gridSize = gridSize;
        this.w = size/gridSize;
        this.fake = fake;

        this.want = int(random(7))+1;
        this.wants = [5];
        this.type = 0;
        this.types = [];

        this.fed = false;
    }

    update() {

        if (this.fake) return;
    }

    setType(int) {

        if (this.fake) return;

        if (this.want == int && !this.fed) {
            this.type = 0;
            this.fed = true;
        } else {
            this.type += int;
        }
    }

    addType(types) {

        if (this.fake) return;

        if (this.wantsMatchTypes(types) && !this.fed) {
            this.types = [];
            this.fed = true;
        } else {
            this.types = this.types.concat(types);
        }
    }

    wantsMatchTypes(types) {

        for (let i = 0; i < this.wants.length; i++) {

            if (!types.includes(this.wants[i])) return false;
        }

        return true;
    }

    display() {

        if (this.fake) return;

        push();
        translate(this.x*this.w+this.w/2, this.y*this.w+this.w/2);

        image(images.pig, 0, 0, this.w, this.w);

        fill(palette.black);
        stroke(palette.light);
        ellipse(0, 0, this.w/3);

        // for (let i = 0; i < this.types.length; i++) {
        //     if (this.types[i] > 0 && this.types[i] <= 3) image(images.patterns[this.types[i]-1], 0, 0, this.w/2, this.w/2);
        // }

        noStroke();
        fill(palette.light);
        textSize(this.w/4);
        text(this.type, 0, 0);
        fill(palette.light);
        if (this.fed) fill(palette.black);
        text(this.want, this.w/2.8, -this.w/3.5);

        pop();
    }
}
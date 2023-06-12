class FoodTile {

    constructor(x, y, gridSize) {

        this.x = x;
        this.y = y;
        this.gridSize = gridSize;
        this.w = size/gridSize;

        this.type = int(random(3))+1;
        this.types = [];
        this.types.push(this.type);
    }

    update() {

    }

    setType(int) {

        this.type = int;
    }

    addType(types) {

        this.types = types;
    }

    display() {

        push();
        translate(this.x*this.w+this.w/2, this.y*this.w+this.w/2);

        fill(palette.light);
        stroke(palette.black);
        rect(0, 0, this.w, this.w);
        strokeWeight(2);

        noStroke();
        fill(palette.black);
        ellipse(0, 0, this.w/2);
        // if (this.type > 0 && this.type <= 3) image(images.patterns[this.type-1], 0, 0, this.w/2, this.w/2);
        fill(palette.light);
        textSize(this.w/3);
        if (this.type > 0) text(this.type, 0, -this.w*0.08);

        pop();
    }
}
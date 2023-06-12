class FoodTile {

    constructor(x, y, gridSize) {

        this.x = x;
        this.y = y;
        this.gridSize = gridSize;
        this.w = size/gridSize;

        this.type = int(random(3))+1;
    }

    update() {

    }

    setType(int) {

        this.type = int;
    }

    display() {

        push();
        translate(this.x*this.w+this.w/2, this.y*this.w+this.w/2);

        fill(palette.light);
        ellipse(0, 0, this.w/2);
        fill(palette.black);
        textSize(this.w/3);
        text(this.type, 0, 0);

        pop();
    }
}
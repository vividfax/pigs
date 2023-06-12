class Grid {

    constructor() {

        this.size = 6;
        this.grid = [];

        for (let i = 0; i < this.size; i++) {

            let row = [];

            for (let j = 0; j < this.size; j++) {
                if (i == 0 || j == 0 || i == this.size-1 || j == this.size-1) {
                    if (i == j || i == this.size-1-j) row.push(new Pig(i, j, this.size, true));
                    else row.push(new Pig(i, j, this.size, false));
                } else {
                    row.push(new FoodTile(i, j, this.size));
                }
            }

            this.grid.push(row);
        }
    }

    update() {

        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j].update();
            }
        }
    }

    move(direction) {

        if (direction == "up") {
            for (let i = 0; i < this.grid.length; i++) {
                if (i == 0 || i == this.size-1) continue;
                for (let j = 0; j < this.grid[i].length; j++) {
                    let targetType = 0;
                    if (this.grid[i][j+1] != undefined) {
                        targetType = this.grid[i][j+1].type;
                        this.grid[i][j+1].type = 0;
                    }
                    this.grid[i][j].setType(targetType);
                }
            }
        } else if (direction == "down") {
            for (let i = 0; i < this.grid.length; i++) {
                if (i == 0 || i == this.size-1) continue;
                for (let j = this.grid[i].length-1; j >= 0; j--) {
                    let targetType = 0;
                    if (this.grid[i][j-1] != undefined) {
                        targetType = this.grid[i][j-1].type;
                        this.grid[i][j-1].type = 0;
                    }
                    this.grid[i][j].setType(targetType);
                }
            }
        } else if (direction == "left") {
            for (let i = 0; i < this.grid.length; i++) {
                for (let j = 0; j < this.grid[i].length; j++) {
                    if (j == 0 || j == this.size-1) continue;
                    let targetType = 0;
                    if (this.grid[i+1] != undefined && this.grid[i+1][j] != undefined) {
                        targetType = this.grid[i+1][j].type;
                        this.grid[i+1][j].type = 0;
                    }
                    this.grid[i][j].setType(targetType);
                }
            }
        } else if (direction == "right") {
            for (let i = this.grid.length-1; i >= 0; i--) {
                for (let j = 0; j < this.grid[i].length; j++) {
                    if (j == 0 || j == this.size-1) continue;
                    let targetType = 0;
                    if (this.grid[i-1] != undefined && this.grid[i-1][j] != undefined) {
                        targetType = this.grid[i-1][j].type;
                        this.grid[i-1][j].type = 0;
                    }
                    this.grid[i][j].setType(targetType);
                }
            }
        }
    }

    display() {

        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j].display();
            }
        }
    }
}
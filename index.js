
export class Color {

    r = 0;  g = 0; b = 0;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    getR() {
        return this.r;
    }

    getG() {

        return this.g;
    }

    getB() {
        return this.b;
    }

    getRandomR() {

        return this.r.toString(16);
    }

    getRandomG() {

        return this.g.toString(16);
    }

    getRandomB() {

        return this.b.toString(16);
    }

}

function main() {

    const R = Math.floor(Math.random() * 255 / 2);
    const G = Math.floor(Math.random() * 255 / 2);
    const B = Math.floor(Math.random() * 255 / 2);

    const color = new Color(R, G, B);
    console.log(color.getR(), color.getG(), color.getB());
    console.log(`${color.getRandomR()}${color.getRandomG()}${color.getRandomB()}`);

}

main();
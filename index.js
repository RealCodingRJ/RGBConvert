
import {mainFunc} from "./DB/DB.js";

async function main() {

    const R = Math.floor(Math.random() * 255 / 2);
    const G = Math.floor(Math.random() * 255 / 2);
    const B = Math.floor(Math.random() * 255 / 2);

    setTimeout(() => {

        console.log(R, G, B);

    }, 3000);

    setTimeout(() => {

        const color = `R: ${R}, G: ${G}, B: ${B}`;
        mainFunc(color);

        console.log(`${R.toString(16)}${G.toString(16)}${B.toString(16)}`);

    }, 5000);
}

main().then((e) => console.log(e));

import {mainFunc} from "./DB/DB.js";

async function main() {

    const R = Math.floor(Math.random() * 255 / 2);
    const G = Math.floor(Math.random() * 255 / 2);
    const B = Math.floor(Math.random() * 255 / 2);

    let message = `${R.toString(16)}${G.toString(16)}${B.toString(16)}`

    await mainFunc(R, G, B, message);

}

await main().then(e => e);

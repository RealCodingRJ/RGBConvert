
function main() {


    const R = Math.floor(Math.random() * 255 / 2);
    const G = Math.floor(Math.random() * 255 / 2);
    const B = Math.floor(Math.random() * 255 / 2);

    console.log(R, G, B);
    console.log(`${R.toString(16)}${G.toString(16)}${B.toString(16)}`);

}

main();
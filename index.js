
function main() {

    const R = Math.floor(Math.random() * 255 / 2);
    const G = Math.floor(Math.random() * 255 / 2);
    const B = Math.floor(Math.random() * 255 / 2);

    setTimeout(() => {

        console.log(R, G, B);

    }, 3000);

    setTimeout(() => {

        console.log(`${R.toString(16)}${G.toString(16)}${B.toString(16)}`);

    }, 5000);
}

main();
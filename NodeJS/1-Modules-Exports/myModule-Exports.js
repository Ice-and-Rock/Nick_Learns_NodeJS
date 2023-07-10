// BELOW ***
// Set up a simple counter to be exported to anothe rfile

let count = 0;

const inc = () => ++count
const dec = () => --count;

const getCount = () => count;

module.exports = {
    anything: true,
    who: "NickyNackyNooo",
    count,
    inc,
    dec,
    getCount
};
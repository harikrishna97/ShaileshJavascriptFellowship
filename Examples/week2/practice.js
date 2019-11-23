var arr = ['a',1];

try {
    const format=/[^a-zA-Z]/
    if (arr.some(function (el) { return format.test(el); })) {
        throw "err"
    } else {
        console.log('no error')
    }
} catch (err) {
    console.log("You have not entered all three dimensions correctly");
}
// Task #1

let numOrStr = prompt('input number or string');

if (numOrStr === null && numOrStr.trim() === "" && isNaN(+numOrStr)) {
    console.log("Введите данные")
}   else {
    console.log("OK!")
}

// Task #2

switch (numOrStr) {
    case null:
        console.log('вы отменили')
    break;

    case (numOrStr.trim() === ''):
        console.log('Empty String');
    break;

    case (isNaN( +numOrStr )):
        console.log(' number is Ba_NaN')
    break;

    default:
        console.log('OK!')
    break;
}
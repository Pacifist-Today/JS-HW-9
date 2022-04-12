// Task #1

let numOrStr = prompt('input number or string');
//
// if (numOrStr === null && numOrStr.trim() === "" && isNaN(+numOrStr)) {
//     console.log("Введите данные")
// }   else {
//     console.log("OK!")
// }

// Task #2

switch (numOrStr) {
    case (null):
        console.log('вы отменили');
        break;

    case "":
        console.log('Empty String');
        break;

    default: {
        switch (isNaN(+numOrStr)) {
            case (true):
                console.log(' number is Ba_NaN');
                break;
            default:
                console.log('OK!');
                break;
        }
    }
}
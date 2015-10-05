var hours = process.argv[2];
var minutes = process.argv[3];

var arabs = [50, 10, 9, 5, 4, 3, 2, 1];

function toRimSimbol(arabSimbol){
    switch (arabSimbol) {
        case(1): return "I";
            break;
        case(2): return "II";
            break;
        case(3): return "III";
            break;
        case(4): return "IV";
            break;
        case(5): return "V";
            break;
        case(9): return "IX";
            break;
        case(10): return "X";
            break;
        case(50): return "L";
            break;
    }
}

function arabToRim(number) {
    if (number != 0) {
        var ostatok = number;
        var kol = 0;
        var result = "";
        var i = 0;
        while (ostatok != 0) {
            kol = Math.floor(ostatok / arabs[i]);
            ostatok = ostatok % arabs[i];
            for (var j = 0; j < kol; j++) {
                result += toRimSimbol(arabs[i]);
            }
            i += 1;
        }
        return result;
    } else {
        return "--";
    }
}

function graphic(str){
    var result = [];
    for (var i=0; i<str.length; i++){
        switch (str[i]){
            case('I'): result.push(["(_)",
                                    "(_)",
                                    "(_)",
                                    "(_)",
                                    "(_)"]);
                break;
            case('V'): result.push(["(_)       (_)",
                                    " (_)     (_) ",
                                    "  (_)   (_)  ",
                                    "   (_) (_)   ",
                                    "     (_)     "]);
                break;
            case('X'): result.push(["(_)   (_)",
                                    " (_) (_) ",
                                    "   (_)   ",
                                    " (_) (_) ",
                                    "(_)   (_)"]);
                break;
            case('L'): result.push(["(_)      ",
                                    "(_)      ",
                                    "(_)      ",
                                    "(_)      ",
                                    "(_)(_)(_)"]);
                break;
            case(':'): result.push([" _ ",
                                    "(_)",
                                    " _ ",
                                    "(_)",
                                    "   "]);
                break;
            case("-"): result.push([ "         ",
                                     " _  _  _ ",
                                     " _  _  _ ",
                                     "         ",
                                     "         "]);
                break;
        }
    }
    return result;
}

if ((hours >= 0) && (hours < 25) && (minutes >= 0) && (minutes < 60)) {

    //Перевод в римскую систему счисления
    var rimClock = arabToRim(hours) + ":" + arabToRim(minutes);
    console.log(rimClock);

    //ASCII графика
    var mas = graphic(rimClock);
    var stroka;
    for (var k = 0; k < 5; k++) {
        stroka = '';
        for (var i = 0; i < mas.length; i++) {
            stroka = stroka + mas[i][k] + " ";
        }
        console.log(stroka);
    }
} else {
    console.log("Incorrect time");
}

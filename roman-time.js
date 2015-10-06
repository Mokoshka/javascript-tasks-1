
var hours = process.argv[2];
var minutes = process.argv[3];

function toRimSimbol(arabSimbol){
/**
 * По числу возвращает соответсвующую римскую цифру
 */
    switch (arabSimbol) {
        case(1): return "I";
        case(2): return "II";
        case(3): return "III";
        case(4): return "IV";
        case(5): return "V";
        case(6): return "VI";
        case(7): return "VII";
        case(8): return "VIII";
        case(9): return "IX";
        case(10): return "X";
        case(20): return "XX";
        case(30): return "XXX";
        case(40): return "XL";
        case(50): return "L";
        default: return "";
    }
}

function arabToRim(number) {
    /**
     * Переводит десятичное число в римскую систему счисления
      */
    if (number == 0) {
        return "--";
    }
    var des;
    var edin;

    edin = number % 10;
    des = number - number % 10;
    return toRimSimbol(des) + toRimSimbol(edin);

}

function graphic(str){
    /**
     * Возвращает графическое представление строки
     */
    var result = [];
    var len = str.length;
    for (var i=0; i<len; i++){
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
    var len = mas.length;
    var kolStr = mas[0].length;
    for (var k = 0; k < kolStr; k++) {
        stroka = '';
        for (var i = 0; i < len; i++) {
            stroka = stroka + mas[i][k] + " ";
        }
        console.log(stroka);
    }
} else {
    console.log("Incorrect time");
}

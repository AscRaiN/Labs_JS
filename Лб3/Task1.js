let word, leters, BLength, middle;
while ((word = prompt("Введите, пожалуйста, слово: ", `Слово`))) {
    if (!word.trim().length) { alert("Данные введены неверно"); }
    else {
        leters = word.split(""); BLength = leters.length / 2;
        if (leters.length % 2 === 1) {
            middle = leters[Math.floor(BLength)];
            alert("Введенное слово: " + word + "; \nСредний символ данного слова: " + middle);
        }
        else {
            if (leters[BLength] === leters[BLength - 1]) { alert("Введенное слово: " + word + "; \n" + "Средние символы данного слова совпадают: " + leters[BLength]); }
            else { alert("Введенное слово: " + word + "; \nСредний символы данного слова: " + leters[BLength - 1] + leters[BLength]); }
        }
    }
}

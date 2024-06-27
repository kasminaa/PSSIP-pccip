function calculateFormula(a, b, c) {
    try {
        const pi = Math.PI;

        if (Math.abs(a - 4) === 0) {
            throw "Деление на 0 невозможно!";
        }

        if (c + pi < 0) {
            throw "Корень из отрицательного числа!";
        }

        let result = (Math.pow(b, 2) - pi) / Math.abs(a - 4) + 7 * Math.sqrt(c + pi);
        return result;
    } catch (error) {
        alert("Ошибка: " + error);
    }
}

function calculateAndDisplayResult() {
    let a = parseFloat(document.getElementById("inputA").value);
    let b = parseFloat(document.getElementById("inputB").value);
    let c = parseFloat(document.getElementById("inputC").value);

    let result = calculateFormula(a, b, c);

    let outputDiv = document.getElementById("output");
    if (result !== undefined) {
        outputDiv.innerHTML = "Результат расчета по формуле: " + result;
    }
}
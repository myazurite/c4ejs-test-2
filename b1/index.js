function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function calculatePrimeSum() {
    const numberA = parseInt(document.getElementById("numberA").value);
    const numberB = parseInt(document.getElementById("numberB").value);
    let sum = 0;
    const primeNumbers = [];

    for (let i = numberA; i <= numberB; i++) {
        if (isPrime(i)) {
            sum += i;
            primeNumbers.push(i);
        }
    }

    document.getElementById("primeSum").textContent = `Tổng: ${sum}`;
    document.getElementById("primeNumbers").textContent = `Số nguyên tố trong khoảng ${numberA} và ${numberB}: ${primeNumbers.join(', ')}`;
}

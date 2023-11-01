function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
        console.log("Số không hợp lệ. Vui lòng nhập số trong khoảng từ 1 đến 10.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

numberOneTriangle(10);

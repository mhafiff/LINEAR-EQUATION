function solveSystem() {
    // Mengambil nilai input dari user
    let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let z1 = parseFloat(document.getElementById("z1").value);
    let c1 = parseFloat(document.getElementById("c1").value);

    let x2 = parseFloat(document.getElementById("x2").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let z2 = parseFloat(document.getElementById("z2").value);
    let c2 = parseFloat(document.getElementById("c2").value);

    let x3 = parseFloat(document.getElementById("x3").value);
    let y3 = parseFloat(document.getElementById("y3").value);
    let z3 = parseFloat(document.getElementById("z3").value);
    let c3 = parseFloat(document.getElementById("c3").value);

    // Membuat matriks koefisien dan konstanta
    let A = [
        [x1, y1, z1],
        [x2, y2, z2],
        [x3, y3, z3]
    ];

    let B = [c1, c2, c3];

    // Memanggil fungsi solve
    let solution = solveLinearSystem(A, B);

    // Menampilkan hasil
    let resultDiv = document.getElementById("result");
    if (typeof solution === "string") {
        resultDiv.textContent = solution;
    } else {
        resultDiv.textContent = `x = ${solution[0].toFixed(2)}, y = ${solution[1].toFixed(2)}, z = ${solution[2].toFixed(2)}`;
    }
}

function solveLinearSystem(A, B) {
    let determinant = det3x3(A);
    
    if (determinant === 0) {
        return "Sistem tidak memiliki solusi unik.";
    }

    let inverseA = inverseMatrix3x3(A);
    let solution = multiplyMatrixVector(inverseA, B);
    return solution;
}

function det3x3(matrix) {
    let [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

function inverseMatrix3x3(matrix) {
    let [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    let det = det3x3(matrix);

    let adjugate = [
        [(e * i - f * h), -(b * i - c * h), (b * f - c * e)],
        [-(d * i - f * g), (a * i - c * g), -(a * f - c * d)],
        [(d * h - e * g), -(a * h - b * g), (a * e - b * d)]
    ];

    // Membagi setiap elemen matriks adjugate dengan determinan
    return adjugate.map(row => row.map(val => val / det));
}

function multiplyMatrixVector(matrix, vector) {
    return matrix.map(row => row.reduce((sum, val, idx) => sum + val * vector[idx], 0));
}

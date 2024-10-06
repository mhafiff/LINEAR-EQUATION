import numpy as np

def solve_linear_system(coeff_matrix, const_terms):
    # Mengonversi input menjadi array numpy
    A = np.array(coeff_matrix, dtype=float)
    B = np.array(const_terms, dtype=float)
    
    try:
        # Menggunakan fungsi solve dari numpy untuk menyelesaikan sistem persamaan
        solution = np.linalg.solve(A, B)
        return solution
    except np.linalg.LinAlgError:
        return "Sistem tidak memiliki solusi unik."

def get_user_input():
    coeff_matrix = []
    const_terms = []
    
    # Meminta input dari user untuk 3 persamaan
    for i in range(3):
        print(f"Masukkan koefisien untuk persamaan {i+1} (x, y, z) dan konstanta:")
        x = float(input(f"Koefisien x{i+1}: "))
        y = float(input(f"Koefisien y{i+1}: "))
        z = float(input(f"Koefisien z{i+1}: "))
        c = float(input(f"Konstanta persamaan {i+1}: "))
        
        # Tambahkan ke list
        coeff_matrix.append([x, y, z])
        const_terms.append(c)
    
    return coeff_matrix, const_terms

# Mengambil input dari pengguna
coeff_matrix, const_terms = get_user_input()

# Menyelesaikan sistem persamaan
solution = solve_linear_system(coeff_matrix, const_terms)

if isinstance(solution, str):
    print(solution)
else:
    print("Solusi sistem adalah:")
    print(f"x = {solution[0]:.2f}")
    print(f"y = {solution[1]:.2f}")
    print(f"z = {solution[2]:.2f}")

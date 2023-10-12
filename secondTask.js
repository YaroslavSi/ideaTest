/* 2. Завдання:
Необхідно вивести "X" якщо перемогли хрестики, або вивести "O" якщо перемогли нулики, або вивести "D" якщо нічия.
Наприклад:
var data = ["X.O", "XX.", "XOO"];
//   0 1 2
// 0 X . O 
// 1 X X . 
// 2 X O O
Результат: "X"
*/

function winner(data) {
    // Рядки на масиви символів
    const board = data.map(row => row.split(''));
    //горизонтальні лінії
    for (let row of board) {
        if (row[0] === 'X' && row[1] === 'X' && row[2] === 'X') {
            return 'X';
        } else if (row[0] === 'O' && row[1] === 'O' && row[2] === 'O') {
            return 'O';
        }
    }

    //вертикальні лінії
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === 'X' && board[1][col] === 'X' && board[2][col] === 'X') {
            return 'X';
        } else if (board[0][col] === 'O' && board[1][col] === 'O' && board[2][col] === 'O') {
            return 'O';
        }
    }

    // Перевіряємо діагоналі
    if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
        (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')) {
        return 'X';
    } else if ((board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
               (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')) {
        return 'O';
    }

    return 'D'; // Нічия
}

const data = ["X.O", "XX.", "XOO"];
const result = winner(data);
console.log(result);
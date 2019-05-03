var valid;
var flag;
$(document).ready(function () {
    $("#btnVar").click(function () {
        //делаем флаг для вывода сообщения о неверной позиции
        flag = 0;
        //полуяаем текущую позицию
        var position = $('#pos').val();
        //создаем шахмотную доску
        var chessboard = [
            ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'],
            ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
            ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3'],
            ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4'],
            ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5'],
            ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6'],
            ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
            ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8']
        ];
        //приводим значение поля позиции к регистру элементов доски
        var positionU = position.toUpperCase();
        //строка для хранения результата вариантов ходов
        var strres = '';

        $.each(chessboard, function (index, value) {
            //проверяем правильность текущей позиции, если действительная выводим возможные варианты
            valid = $.inArray(positionU, value);
            if (valid != -1) {
                var resvalid = [];
                //пароверяем направление верх, существование возможных ходов
                if ((index + 2) <= 7) {
                    if (valid + 1 <= 7) {
                        resvalid.push(chessboard[index + 2][valid + 1]);
                    }
                    if (valid - 1 >= 0) {
                        resvalid.push(chessboard[index + 2][valid - 1]);
                    }
                }
                if ((index + 1) <= 7) {
                    if (valid + 2 <= 7) {
                        resvalid.push(chessboard[index + 1][valid + 2]);
                    }
                    if (valid - 2 >= 0) {
                        resvalid.push(chessboard[index + 1][valid - 2]);
                    }
                }
                //пароверяем направление низ
                if ((index - 2) >= 0) {
                    if (valid + 1 <= 7) {
                        resvalid.push(chessboard[index - 2][valid + 1]);
                    }
                    if (valid - 1 >= 0) {
                        resvalid.push(chessboard[index - 2][valid - 1]);
                    }
                }
                if ((index - 1) >= 0) {
                    if (valid + 2 <= 7) {
                        resvalid.push(chessboard[index - 1][valid + 2]);
                    }
                    if (valid - 2 >= 0) {
                        resvalid.push(chessboard[index - 1][valid - 2]);
                    }
                }

                //формируем строку возможных вариантов
                $.each(resvalid, function (index, value) {
                    strres = strres + value + ' ';
                });
                $('#result').text('');
                $('#result').text(strres);
                flag = 1;
                alert('Возможные варианты хода: ' + strres);
            }
        });
        if (flag == 0) {
            alert('Неверная позиция');
        }
    });
});

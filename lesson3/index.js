// Унарный плюс приводит операнд к числу
console.log("undefined + '5': ", undefined + '5');
+17;
console.log('+17: ',+17);

+'77';
console.log("'77: '",+17);

// Бинарный плюс складывает строки или прибавляет числа
10 + '5';
console.log("10 + '5': ", 10 + '5');
'some' + 'text';
console.log("'some' + 'text': ",'some' + 'text');

// Математические операции с undefined возвращают NaN
undefined + 1;
console.log('undifined + 1: ',undefined + 1);
null + 8;
console.log('null + 8: ',null + 8);
undefined + '5';
console.log("undefined + '5': ", undefined + '5');
7 - null;
console.log('7 - null: ',7 - null);
5 - undefined;
console.log('5 - undefined: ',5 - undefined);
'text' + null;
console.log("'text' + null: ",'text' + null);
let num = 17;
console.log('num: ',num);

// Постфиксная и префиксная форма записи
++num;
console.log('++num: ',++num);
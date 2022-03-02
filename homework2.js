/*1. Напишите однострочное решение, которое вычисляет сумму
квадратных корней для всех чётных чисел целочисленного массива*/
{
let a = [1,2,3,4,5,9,10,15]

let b = a.filter (item => item % 2 === 0)
b = b.map(item => item*item)

console.log(b);
}

/*2. Яблоко стоит 1.15, апельсин стоит 2.30.
Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?*/
{
let appleCost = 1.15
let orangeCost = 2.30
console.log(appleCost + orangeCost) //3.4499999999999997 т.к. является бесконечной дробью в двоичной форме
}

/*3. Треугольник. Напишите цикл,  выводит такой треугольник:
*
**
***
****
*****
****** */

{

const matrix = new Array (6)
matrix.forEach((_, i ) => {matrix[i] = []})
let t = []

    for ( let i = 0; i<6; i++) {
        t[i] = []
        for (let j = 0; j<6; j++) {
             if(i >= j){
                t[i][j] = '*'
            }

            else{
                t[i][j] = ""
           }
        }
    }

console.log(t)

}

/* 4. Напишите программу, которая выводит через console.log все числа от 1 до 100,
с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.*/


for(let i = 1;i<=100; i++){

    if (
        i%5 === 0 && i%3 === 0){
            console.log('FizzBuzz')
    }

    else if(i%5 === 0 && i%3 !==0){
        console.log('Buzz')
    }

    else if(i%3 === 0){
        console.log('Fizz')
    }

    else{
        console.log(i)
    }
}


/*5. Напишите скрипт, который считает количество секунд в часе.*/

let minuteInHour = 60
let secIMinute = 60

console.log(minuteInHour*secIMinute)


/*6. Спросите имя пользователя с помощью метода prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.*/

let name = prompt("What is your name?", "Name")
alert(`Your name is ${name}`)


/*7. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.*/

 let str = 'abcde'
 console.log(str[0])
 console.log(str[2])
 console.log(str[4])

/*8. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй,
а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.*/

let arr = [2, 5, 3, 9]

let result = arr[0]*arr[1] + arr[2]* arr[3]

console.log(result)

// 9. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
let g = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
console.log (g[1][0])

// 10. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
let min = 59

if (min<=15){
    console.log ("Первая четверть")}

else if (min<=30 && min>15){
    console.log ("Вторая четверть")}

else if (min<=45 && min>30){
    console.log ("Третья четверть")}  

else if (min<=59 && min>45){
    console.log ("Четвертая четверть")} 


// 11. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  a, равном 1, 0, -3.
let a = -3
if (a<0){
    console.log("Верно")}
else{
    console.log("Неверно")
}

/* 12. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при  test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.*/
let test = true
if (test===true){
    console.log("Верно")}
else{
    console.log("Неверно")
}

/* 13.Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.*/
let result2 = "Не определено"
let num = 4

switch(num){

    case 1: {
    result2= "Зима" 
    console.log(result2)
    break;
    }
    case 2: {
    result2= "Весна"; 
    console.log(result2)
    
    break;        
    }
    case 3: {
    result2= "Лето" 
    console.log(result2)
    break;        
    }
    case 4: {
    result2= "Осень" 
    console.log(result2) 
    break    
    }
    default:
    console.log ("Введено неверное значение")
}
// 14Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

 let array = [1, 2, 3, 4, 5]

 for (let i=0; i<=array.length; i++){
    console.log (array[i])
 }

// 15.Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
{

let a = 10
let b =3
let c = a%b
console.log (c)

}
// 16.Возведите 2 в 10 степень. Результат запишите в переменную st.
let st = Math.pow(2, 10)
console.log(st)

// 17.Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let h = 379
let sqrt = Math.sqrt(h)
console.log(sqrt)

let r = Math.round(sqrt) //до целых
console.log(r)

let c = 10* sqrt
c = (Math.round(c))/10 //до десятых
console.log(c)

let v = 100*sqrt
v = (Math.round(v))/100 //до сотых
console.log(v)

// 18.Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
let y = [4, -2, 5, 19, -130, 0, 10]
y.sort((a,b) => a-b)

console.log (y) // отсортированный массив
console.log(y[0]) // минимальное
console.log(y[y.length-1]) // максимальное

// 19.Выведите на экран случайное целое число от 1 до 100.
{
    let max = 100
    let min = 1

    y = Math.random() * (max - min + 1) + min;
    y = Math.round(y)

    console.log (y) 
}
// 20. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
{
    let array = 'aaa bbb ccc' 
    console.log(array.substring(4, 7));

    console.log(array.slice(4,7))
}

// 21.Дана строка 'js'. Сделайте из нее строку 'JS'.
{
    let string = 'js'
    string = string.toUpperCase
    console.log(string)
}
// 22. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
{
    let string = 'я учу javascript!'
    console.log(string.length+1)
}

// 23.Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

{   
    let string = 'я учу javascript!'
    console.log(string.indexOf('учу'))
}
    
// 24. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

{   
    let string = 'Я-учу-javascript!'
    let t = string.split('-')
    t = t.join('!')
    console.log(t)
}

// 25.Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

{   
    let string = 'я учу javascript!'
    let t = string.split(' ')
    console.log(t)
}

// 26.Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

{   
    let string = ['я', 'учу', 'javascript', '!']
    console.log(string.join('+'))
}

/*27.Преобразуйте первую букву строки в верхний регистр*/
{
    let string = 'я учу javascript!'
    let u = string[0].toUpperCase() + string.slice(1)
    console.log(u)
}
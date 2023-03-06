"use strict";

// let a = 15;
// console.log( a );

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log( number );


// const obj = {
// 	a: 20
// };
// obj.a = 1;
// console.log( obj );
//========================================================================================================================================================
// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

// Типи інформації
/*
1. Числа - 1, 2, 3
2. Строки 'string', 'name' - записуються тільки в лапках
3. Логічні типи (boolean) - true/false;
4. null - обʼєкту просто неіснує
5. undefined - це коли щось існує, але значення ніякого нема
6
*/

// let number1 = 4.6;

// console.log( 4 / 0 );
// console.log( 'string' * 9 );

// const obj = {
// 	name: "Pasha",
// 	age: 26,
// 	isMarried: false
// };

// console.log( obj.isMarried );
// console.log( obj["name"] );

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[0]);


// const obj = {
// 	'Anna': 500,
// 	'Pasha': 800
// };
// obj.Anna = 70;
// console.log( obj );

// const arr = ['a', 'b', 'c'];
// const arrObj = {
// 	0: 'a',
// 	1: 'b',
// 	2: 'c'
// }
// const b = 'b';

// arrObj.b = '1234';
// arrObj['b'] = '1234';
// console.log( arrObj[1] );
// console.log( arrObj['b'] );
// console.log( arrObj.b );


/* Всередині обʼєктів можна створювати вкладені структури */
// const arrObj2 = {
// 	0: 'a',
// 	1: 'b',
// 	2: 'c',
// 	abc: {
// 		df: [{}, {}],
// 		def: {

// 		}
// 	}
// }

// alert( 'Hello' );

// const result = confirm( "Are you here?" );
// console.log(result);

// const answer = +prompt( "Do you have 18?", "18" );
// console.log( answer + 5  );

// const answers = [];

// answers[0] = prompt( 'Ваше імʼя?', '' );
// answers[1] = prompt( 'Ваше прізвище?', '' );
// answers[2] = prompt( 'Скільки вам років?', '' );

// document.write( answers );
// console.log( typeof(answers));
// console.log( typeof(null));
//========================================================================================================================================================


// let category = 'toys';

// console.log( 'https://someurl.com/' + category );
// console.log( `https://someurl.com/${category}/5` );

// let user = "Pasha";

// alert( `Hello, ${user}` );

//========================================================================================================================================================
// Оператори
// console.log( 'arr' + " - object" );
// console.log( 4 + +"5" );

// let incr = 10;
// let decr = 10;

// ++incr;
// --decr;

// console.log( ++incr );
// console.log( --decr );

// console.log( 6 % 2 );

// console.log( 2 + 2 * 2 !== '6' );

// let isChecked = false,
// 	isClose = false;

// console.log( isChecked || !isClose );

//========================================================================================================================================================


// Таймер

// function changeTimezone(date, ianatz) {
// 	var invdate = new Date(date.toLocaleString('en-US', {
// 	  timeZone: ianatz
// 	}));
  
// 	var diff = invdate.getTime() - date.getTime();
  
// 	return new Date(date.getTime() - diff);
//   };
  
//   document.addEventListener('DOMContentLoaded', function() {
// 	// конечная дата
// 	const deadline = new Date(2023,01,30);
// 	// часовой пояс
// 	// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
// 	// var deadline = changeTimezone(x, "Europe/Ulyanovsk");
// 	// id таймера
// 	let timerId = null;
// 	// склонение числительных
// 	function declensionNum(num, words) {
// 	  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
// 	}
// 	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
// 	function countdownTimer() {
// 	  const diff = deadline - new Date();
// 	  if (diff <= 9) {
// 		clearInterval(timerId);
// 	  }
// 	//   const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
// 	  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
// 	  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
// 	  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
// 	//   $days.textContent = days < 10 ? '0' + days : days;
// 	  $hours.textContent = hours < 10 ? '0' + hours : hours;
// 	  $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
// 	  $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
// 	//   $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
// 	  $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
// 	  $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
// 	  $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
// 	}
// 	// получаем элементы, содержащие компоненты даты
// 	// const $days = document.querySelector('.timer__days');
// 	const $hours = document.querySelector('.timer__hours');
// 	const $minutes = document.querySelector('.timer__minutes');
// 	const $seconds = document.querySelector('.timer__seconds');
// 	// вызываем функцию countdownTimer
// 	countdownTimer();
// 	// вызываем функцию countdownTimer каждую секунду
// 	timerId = setInterval(countdownTimer, 1000);
//   } );

  //========================================================================================================================================================
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt( 'Сколько фильмов вы уже посмотрели?', '' );

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	enres: [],
// 	privat: false
// };

// const a = prompt( 'Один из последних просмотренных фильмов?' );
// const b = prompt( 'На сколько оцените его?' );
// const c = prompt( 'Один из последних просмотренных фильмов?' );
// const d = prompt( 'На сколько оцените его?' );

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log( personalMovieDB );

//========================================================================================================================================================

// if ( 4 == 4 ) {
// 	console.log( 'ok' );
// } else {
// 	console.log( 'error' );
// }

// const number = 50;

// if ( number > 50 ) {
// 	console.log( 'Не вірно' );
// } else if ( num > 100 ) {
// 	console.log('Бвгато');
// } else {
// 	console.log( 'Вірно' );
// }

// (num === 50) ? console.log('ok') : console.log('Не вірно')

// const num = '50';

// switch (num) {
// 	case '49':
// 		console.log( 'Не вірно' );
// 		break;
// 	case '100':
// 		console.log( 'Не вірно' );
// 		break;
// 	case '50':
// 		console.log( 'Вірно' );
// 		break;
// 	default:
// 		console.log( 'Пощастить іншим разом' );
// 		break;
// }

// const arr = 40;

// if ( arr > 50 ) {
// 	console.log( 'false' );
// } else if ( arr < 50 ) {
// 	console.log( 'true' );
// } else {
// 	console.log( 'Іншим разом' );
// }

//========================================================================================================================================================
// const hamb = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
// if ( hamb === 3 && cola === 2 || fries === 3 && nuggets ) {
// 	console.log( 'Ми задоволені' );
// } else {
// 	console.log( 'Ми йдемо' );
// }

// console.log( hamb === 3 && col === 2 || fries === 3 && nugget );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5 );

// console.log( NaN || null && !3 && undefined || 5 );

// console.log( 5 === 5 && 3 > 1 || 5 );


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }

// let hamburger1;
// const fries1 = NaN;
// const cola1 = 0;
// const nuggets1 = 2;


// if (hamburger1 || cola1 || fries1 === 3 || nuggets1) {
//     console.log('Done!')
// }

// let hamburger2;
// const fries2 = NaN;
// const cola2 = 0;
// const nuggets2 = 2;


// if (hamburger2 && cola2 || fries2 === 3 && nuggets2) {
//     console.log('Done!')
// }
 //========================================================================================================================================================
 // Цикли

// let num1 = 50;

// while ( num1 <= 55 ) {
// 	console.log( num1 );
// 	num1++;
// }

// do {
// 	console.log( num1 );
// 	num1++
// }
// while ( num1 < 55 );

// for ( let i = 1; i < 8; i++ ){
// 	console.log( i );
// }
// for ( let i = 1; i < 8; i++ ){
// 	console.log( num1 );
// 	num1++;
// }

// for ( let i = 1; i < 10; i++) {
// 	if ( i === 6 ) {
// 		break;
// 	}
// 	console.log( i );
// }

// for ( let i = 1; i < 10; i++) {
// 	if ( i === 6 ) {
// 		continue;
// 	}
// 	console.log( i );
// }
//========================================================================================================================================================
// ВКЛАДЕНІСТЬ ЦИКЛІВ

// for ( let i = 0; i < 3; i++ ){
// 	console.log( i );
// 	for ( let j = 0; j < 3; j++ ){
// 		console.log( j );
// 	}
// }

// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let result = '';
// const lenght = 7;

// for ( let i = 1; i < lenght; i++) {
	
// 	for ( let j = 0; j < i; j++ ){
// 		result += '*';
// 	}
		
	
// 	result += '\n';
// }
// console.log( result );

//========================================================================================================================================================

// first: for ( let i = 0; i < 3; i++ ){
// 	console.log(`First level: ${i}`);
// 	for ( let j = 0; j < 3; j++ ){
// 		console.log(`Second level: ${j}`);
// 		for ( let k = 0; k < 5; k++ ){
// 			if ( k === 2 ) break first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

//========================================================================================================================================================

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание #2 на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания


// const c = prompt( 'Один из последних просмотренных фильмов?' );
// const d = prompt( 'На сколько оцените его?' );

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// let num1 = 50;

// while ( num1 <= 55 ) {
// 	console.log( num1 );
// 	num1++;
// }

// const numberOfFilms = +prompt( 'Сколько фильмов вы уже посмотрели?', '' );
    
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     enres: [],
//     privat: false
// };


// WHILE
// let a;
// let b;
// for ( let i = 0; i < 2; i++ ) {
//     a = '';
//     b = '';

//     while ( a === '' || a === null || a.length > 50 || a.trim() === '' || b === '' || b === null || b.trim() === '' ) {
//         a = prompt( 'Один из последних просмотренных фильмов?', '' );
//         b = prompt('На сколько оцените его?', '');
//     }

//     personalMovieDB.movies[a] = b;
// }


// DO WHILE
// let a;
// let b;

// for (let i = 0; i < 2; i++){

// 	do{
//         a = prompt( 'Один из последних просмотренных фильмов?', '' );
//         b = prompt('На сколько оцените его?', '');
// 	} while (a === '' || a === null || a.length > 50 || a.trim() === '' || b === '' || b === null || b.trim() === '' );

//     personalMovieDB.movies[a] = b;
//     console.log( 'Done' );

// } 



// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

//     if ( personalMovieDB.count < 10 ) {
//     	console.log("Просмотрено довольно мало фильмов");
//     } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
//     	console.log( "Вы классический зритель" );
//     } else if ( personalMovieDB.count >= 30 ) {
//     	console.log( "Вы киноман" );
//     } else {
//     	console.log("Произошла ошибка");
//     }
    
//     console.log( personalMovieDB );


//========================================================================================================================================================
// Функції

// let num = 20;

// function showFirstMessage(text) {
//     console.log( text );
//     console.log( num );
// }

// showFirstMessage( 'Hello World' );
// console.log( num );



// function calc ( a, b ) {
//     return ( a + b );
// }
// console.log( calc( 3, 5 ) );

// function ret () {
//     let num = 50;

//     //

//     return num;
// }
// const anotherNum = ret();
// console.log( anotherNum );

// const logger = function () { 
//     console.log( 'Hello' );
// };

// logger(); 

// =============================

// const calc = ( a, b ) => {
//     console.log( '1' );
//     return a + b;
// };


// const usdCurs = 28;
// const eurCurs = 32;

// function convert ( monye, curs ) {
//     console.log( curs * monye );
// }

// const usdCurs1 = 30;
// const discont = 0.9;

// function convert1 ( monye, curs ) {
//     return curs * monye;
// }

// function promotion ( result ) {
//     console.log( result * discont );
// }
// const res = convert1( 500, usdCurs1 );
// promotion( res ); // інший варік, просто створюється проміжкова змінна, в яку задаєьться значення першої функції

// promotion( convert1( 500, usdCurs1 ) );- один із варіків функція в функції

// convert( 500, usdCurs );
// convert( 500, eurCurs );

// function test () {
//     for ( let i = 0; i < 5; i++ ){
//         console.log( i );
//         if ( i === 3 ) return;
//     }
//     console.log( 'Done' );
// }

// test();

//========================================================================================================================================================
// Методи і властивості рядків

// const str = "test";

// console.log( str.toUpperCase() );
// console.log( str.toLowerCase() );
// console.log( str );

// const fruit = "Some fruit"

// console.log( fruit.indexOf( "q" ) );

// const logg = "Hello world";

// console.log( logg.slice( -5, -1 ) );

// console.log( logg.substring( 5, 11 ) );

// console.log( logg.substr(6, 4) );

// const num = 12.2;
// console.log( Math.round( num ) );

// const test = "12.2px"

// console.log( parseInt( test ) );
// console.log( parseFloat( test ) ); 




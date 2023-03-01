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

const numberOfFilms = prompt( 'Сколько фильмов вы уже посмотрели?', '' );

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	enres: [],
	privat: false
};

const a = prompt( 'Один из последних просмотренных фильмов?' );
const b = prompt( 'На сколько оцените его?' );
const c = prompt( 'Один из последних просмотренных фильмов?' );
const d = prompt( 'На сколько оцените его?' );

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
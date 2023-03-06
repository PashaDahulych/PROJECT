'use strict'

// FUNCTION TASK

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt( 'Скільки фільмів Вам вже переглянуто?', '' );

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN( numberOfFilms ) ) {
        numberOfFilms = +prompt( 'Скільки фільмів Вам вже переглянуто?', '' );
    }
}

start();
const personalMovieDB = {
	cont: numberOfFilms,
	movies: {},
	actots: {},
	genser: [],
	privat: false
};


function rememberMyFilms() {
	for ( let i = 0; i < 2; i++ ) {
		const a = prompt( 'Один из последних просмотренных фильмов?', '' );
		const b = prompt( 'На сколько оцените его?', '' );
	
		if ( a != '' && a != null && a.length < 50 && b != '' && b != null ) {
			personalMovieDB.movies[a] = b;
			console.log( 'Done' );
		} else {
			i--;
		}
	}
}

// rememberMyFilms(); 

function detectPersonalLevel() {
	if ( personalMovieDB.count < 10 ) {
		console.log("Просмотрено довольно мало фильмов");
	} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
		console.log( "Вы классический зритель" );
	} else if ( personalMovieDB.count >= 30 ) {
		console.log( "Вы киноман" );
	} else {
		console.log("Произошла ошибка");
	}
}

// detectPersonalLevel();

function showMyDB (hidden) {
	if (!hidden) {
		console.log( personalMovieDB );
	}
}

showMyDB( personalMovieDB.privat );

function writeYourGenres(){
	for ( let i = 1; i <= 3; i++ ) {
		// На хлопський розум
		// const genre = prompt( `Ваш любимый жанр под номером ${i}` );
		// personalMovieDB.genser[i - 1] = genre;
		// Для досвідчений програмістів
		personalMovieDB.genser[i - 1] = prompt( `Ваш любимый жанр под номером ${i}` );
	}
} 

writeYourGenres();
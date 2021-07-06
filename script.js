const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        numberOfFilms.count = +prompt ('Сколько вы уже посмотрели фильмов?', '');
    
        while (numberOfFilms.count == '' || numberOfFilms.count == null || isNaN(numberOfFilms.count)) {
            numberOfFilms.count = +prompt ('Сколько вы уже посмотрели фильмов?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            const a = prompt ('Один из последних просмотренных фильмов?', ''),
                  b = prompt ('На сколько оцените его?', '');
        
            if (a != null && b != null && a !='' && b != '' && a.length < 50) {
        
                personalMovieDB.movies[a]=b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }    
        }  
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log('Просмотренно довольно мало фильмов');
        }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            console.log("Вы классический зритель");
        }  else if (personalMovieDB.count >=30){
            console.log("Вы киноман");
        }  else{
            console.log('error');
        }
    },
    showMyDB: function (hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
    // writeYourGeners: function(){
    //     for (let i=1; i <= 3; i++) {
    //         let genre = prompt (`Ваш любимый жанр под номером ${i} `,'');

    //         if (genre == '' || genre == null) {
    //             console.log('Вы ввели некоректные данные или не ввели вовсе');
    //             i--;
    //         }   else  {
    //             personalMovieDB.genres[i - 1] = genre;
    //             }
    //         }
        
    //         personalMovieDB.genres.forEach((item, i) => {
    //             console.log(`Любимый жанр ${i + 1}, ${item} `);
    //         })
    //     }
    
    //Альтернативный способ написание медота writeYourGeners
    writeYourGeners: function(){
        for (let i=1; i < 2; i++) {
            let genres = prompt (`Введите вваши любимые жанры через запятую`).toLowerCase();
            // .toLowerCase() - для правильной сортировки данных независсимо от регистра, вводимым пользователем

            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные или не ввели вовсе');
                i--;
            }   else  {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort(); 
                }
            }
        
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1}, ${item} `);
            })
        }

    
};
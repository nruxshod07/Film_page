import {
  getFilms,
  getPersons,
  getTrailers,
  Genres,
  getFilmByGenre,
  getFilmByDate,
} from "./modules/http";
import { create_header } from "./modules/header";
import { reload_main, persons, createGenres,createFilmByDate } from "./modules/functions";

let cont = document.querySelector(".container");
let now_playing_films = document.querySelector(".films");
let iframe = document.querySelector("iframe");
let neww = document.querySelector(".new");
let popular_films = document.querySelector(".popular_films");
let modal = document.querySelector(".modal");
let upcoming = document.querySelector(".upcoming");
let nec_trailers = document.querySelector(".necessary_trailers");
let genres = document.querySelector(".genres");
let years = document.querySelectorAll(".years p");
let date = null;


create_header(cont);

getFilms("now_playing")
  .then((res) => res.json())
  .then((res) => {
    reload_main(now_playing_films, res, 8);
    neww.onclick = () => {
      if (now_playing_films.classList.contains("more")) {
        now_playing_films.classList.remove("more");
        now_playing_films.innerHTML = "";
        reload_main(now_playing_films, res, 8);
        neww.innerHTML = "Все новинки";
      } else {
        now_playing_films.classList.add("more");
        now_playing_films.innerHTML = "";
        reload_main(now_playing_films, res, 20);
        neww.innerHTML = "Закрыть";
      }
    };
  });
getFilms("popular")
  .then((res) => res.json())
  .then((res) => {
    // for (let i = 0; i <= 3; i++) {
    //   getTrailers(res.results[i].id)
    //     .then((ress) => ress.json())
    //     .then((ress) => {
    //       let trailer = document.createElement("div");
    //       let tr = document.createElement("iframe");

    //       tr.src = "https://www.youtube.com/embed/" + ress.results[0].key;

    //       trailer.append(tr);
    //       nec_trailers.append(trailer);
    //     });
    // }

    console.log(res);
    reload_main(popular_films, res);
  });
getFilms("popular")
  .then((res) => res.json())
  .then((res) => reload_main(popular_films, res, 4));
getFilms("upcoming")
  .then((res) => res.json())
  .then((res) => reload_main(upcoming, res, 4));
getPersons()
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);
  });
Genres()
  .then((res) => res.json())
  .then((res) => {
    createGenres(genres, res.genres, now_playing_films);
    console.log(res);
  });
createFilmByDate(years,popular_films)
// getFilmByGenre()
// .then(res => res.json())
// .then(res => console.log(res))
// let form = document.forms[0];

// form.onsubmit = (e) => {
//   e.preventDefault();
//   let error = false;

//   if (error) {
//     alert("error");
//   } else {
//     submit();
//   }
// };

// function submit() {
//   let user = {};
//   let fm = new FormData(form);
//   fm.forEach((value, key) => {
//     user[key] = value;
//   });
// console.log(user);
// }
// search("avengers")
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//     for (let i = 0; i <= 4; i++) {
//       let title = document.createElement("h1");
//       let result = document.createElement("div");
//       let film = document.createElement("div");
//       title.innerHTML = res.results[i].title;

//       result.classList.add("result");
//       // console.log(res);
//       result.append(film);
//       film.append(title);
//       modal.append(result);
//     }
//   });

// fetch("https://api.themoviedb.org/3/discover/movie&release_date.gte=$%7B%60$%7Bpromp%7D-01-01%60%7D&release_date.lte=$%7B%60$%7Bpromp%7D-12-30%60%7D&region=US%60", {
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY4N2I0YTdlYzE4NmZhM2ZjNzcxZGVjNTkxZTc0MyIsInN1YiI6IjY1NTc0NjVkNTM4NjZlMDEzOWUyZjkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWM59T4oWuK5yh6Ub7dnmOr33v6iRL9qrNj-k7rhq1E",
//   },
// })
// .then(res => res.json())
// .then(res => console.log(res))

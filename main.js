let cont = document.querySelector(".container");
let now_playing_films = document.querySelector(".films");
let iframe = document.querySelector("iframe");
let neww = document.querySelector(".new");
let popular_films = document.querySelector(".popular_films");

import { getFilms, getPersons } from "./modules/http";
import { create_header } from "./modules/header";
import { reload_main, persons } from "./modules/functions";
create_header(cont);

getFilms("now_playing")
  .then((res) => res.json())
  .then((res) => {
    reload_main(now_playing_films, res, 7);
    neww.onclick = () => {
      reload_main(now_playing_films, res, 7);
    };
  });
getFilms("popular")
  .then((res) => res.json())
  .then((res) => {
    console.log("hi");
    console.log(res);
    reload_main(popular_films, res, 7);
  });
getPersons()
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

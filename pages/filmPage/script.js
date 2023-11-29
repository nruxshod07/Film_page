import { getFilm } from "/modules/http";
import {create_header} from "/modules/header";

let cont = document.querySelector(".container")
let movie_name = document.querySelector(".movie_name");
let movie_mini_name = document.querySelector(".mini_name");
let tagline = document.querySelector(".tagline");
let id = location.search.split("=").at(-1);
let movie_backdrop = document.querySelector(".movie_bg");
let poster = document.querySelector(".poster");
let description = document.querySelector(".description");
let rate = document.querySelector(".rate");
let vout_count = document.querySelector(".vout_count");
let waiting_rate = document.querySelector(".waiting");
let wait_rate = document.querySelector(".wait_rate");
let year = document.querySelector(".year");
let slogan = document.querySelector(".slogan");
create_header(cont)

getFilm("/movie/" + id)
  .then((res) => res.json())
  .then((res) => {
    let title = res.title;

    if (title.length > 25) {
      movie_name.innerHTML = title.substring(0, 16);
    } else {
      movie_name.innerHTML = title;
    }

    movie_mini_name.innerHTML = res.title;
    tagline.innerHTML = res.tagline;
    movie_backdrop.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${res.backdrop_path})`;
    poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${res.poster_path})`;

    let overview = res.overview;
    if (overview.length > 200) {
      description.innerHTML = `${overview.substring(0, 200)}...`;
    } else {
      description.innerHTML = overview;
    }

    rate.innerHTML = res.vote_average.toFixed(1);
    vout_count.innerHTML = res.vote_count;
    if (res.runtime >= 100) {
      waiting_rate.innerHTML = "67";
      wait_rate.style.width = `67%`;
    } else {
      waiting_rate.innerHTML = res.runtime;
      wait_rate.style.width = `${res.runtime}%`;
    }
    let date = new Date(res.release_date);
    let yearr = date.getFullYear();
    year.innerHTML = yearr;

    let countries = res.production_countries;

    let countriesElement = document.getElementById("countries");
    let countryNames = countries.map((country) => country.name);
    let joinedNames = countryNames.join(", ");
    countriesElement.innerHTML = joinedNames;

    slogan.innerHTML = res.tagline;

    console.log(res);
  });

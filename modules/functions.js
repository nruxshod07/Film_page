let base_img_url = "https://image.tmdb.org/t/p/w500";
export function reload_main(place, arr, num) {
  for (let i = 0; i <= num - 1; i++) {
    let bg = document.createElement("div");
    let card = document.createElement("button");
    let item = document.createElement("div");
    let title = document.createElement("img");
    let rateDiv = document.createElement("div");
    let rate = document.createElement("p");
    let info = document.createElement("p");
    if (arr.results[i].poster_path !== null) {
      title.src = base_img_url + arr.results[i].poster_path;
      info.innerHTML = arr.results[i].title;
    }
    card.innerHTML = "Карточка фильма";
    card.classList.add("card");
    bg.classList.add("itemBG");
    item.classList.add("item");
    rateDiv.prepend(rate);
    item.prepend(rateDiv, title, info, bg, card);
    place.prepend(item);
    item.ondblclick = () => {
      window.location.href = "/pages/filmPage/?id=" + arr.results[i].id;
    };
    item.onmouseenter = () => {
      bg.style.display = "block";
      card.style.display = "block";
    };
    item.onmouseleave = () => {
      bg.style.display = "none";
      card.style.display = "none";
    };
    // console.log(arr.results);
  }
}
import { getPersons } from "/modules/http";
export function persons(place) {
  getPersons()
    .then((res) => res.json())
    .then((res) => {});
}

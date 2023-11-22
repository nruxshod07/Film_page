let randomNum = null;
let base_img_url = "https://image.tmdb.org/t/p/w500";
export function reload_main(place, arr,items) {
  for (let i = 0; i <= items; i++) {
    randomNum = Math.round(Math.random() * 20);
    let item = document.createElement("div");
    let title = document.createElement("img");
    let rateDiv = document.createElement("div");
    let rate = document.createElement("p");
    let info = document.createElement("p");
    if (arr.results[randomNum].poster_path !== null) {
      title.src = base_img_url + arr.results[randomNum].poster_path;
      info.innerHTML =arr.results[randomNum].title;
    }else {
      title.src = base_img_url + arr.results[randomNum + 1].poster_path;
    }
    item.classList.add("item")
    rateDiv.prepend(rate);
    item.prepend(rateDiv, title, info);
    place.prepend(item);
    item.ondblclick = () => {
      window.location.href = "/public/filmpage/"
      document.body.style.background
    }
  }
}

import { getPersons } from "/modules/http";
export function persons(place) {
getPersons()
.then(res => res.json())
.then(res => {

})
}
export function create_header(place) {
    let header = document.createElement("header")
    let left = document.createElement("div")
    let middle = document.createElement("div")
    let right = document.createElement("div")
    let left__bottom = document.createElement("img")
    let left_top = document.createElement("img")
    let afisha = document.createElement("p")
    let media = document.createElement("p")
    let films = document.createElement("p")
    let actors = document.createElement("p")
    let news = document.createElement("p")
    let packs = document.createElement("p")
    let category = document.createElement("p")
    let search = document.createElement("button")
    let searchImg = document.createElement("img")
    let sign_in = document.createElement("button")


    left.classList.add("left")
    right.classList.add("right")
    middle.classList.add("middle")
    search.classList.add("search")
    sign_in.classList.add("sign_in")


    afisha.innerHTML = "Афиша"
    media.innerHTML = "Медиа"
    films.innerHTML = "Фильмы"
    actors.innerHTML = "Актеры"
    news.innerHTML = "Новости"
    packs.innerHTML = "Подборки"
    category.innerHTML = "Категории"
    sign_in.innerHTML = "Войти"
    searchImg.src = "/public/Vector.png"
    left__bottom.src = "/public/soc.media.png"
    left_top.src = "/public/logo.png"

    search.append(searchImg)
    place.prepend(header)
    header.append(left,middle,right)
    left.prepend(left_top,left__bottom)
    middle.prepend(afisha,media,films,actors,news,packs,category)
    right.prepend(search,sign_in)

    search.onclick = () => {
        
    }
}
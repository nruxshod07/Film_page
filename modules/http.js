let base_url = "https://api.themoviedb.org/3";
let base_trailer_url = "https://api.themoviedb.org/3/movie";
export const getFilms = async (url) => {
  try {
    const res = await fetch(
      base_url +
        `/movie/${url}?language=ru-RU&page=${Math.round(Math.random() * 100)}`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY4N2I0YTdlYzE4NmZhM2ZjNzcxZGVjNTkxZTc0MyIsInN1YiI6IjY1NTc0NjVkNTM4NjZlMDEzOWUyZjkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWM59T4oWuK5yh6Ub7dnmOr33v6iRL9qrNj-k7rhq1E",
        },
      }
    );
    return res;
  } catch (error) {
    console.log("данные не получены");
  }
};
export const getPersons = async (url) => {
  try {
    const res = await fetch(base_url + `/person/popular`, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY4N2I0YTdlYzE4NmZhM2ZjNzcxZGVjNTkxZTc0MyIsInN1YiI6IjY1NTc0NjVkNTM4NjZlMDEzOWUyZjkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWM59T4oWuK5yh6Ub7dnmOr33v6iRL9qrNj-k7rhq1E",
      },
    });
    return res;
  } catch (error) {
    console.log("данные не получены");
  }
};
// export function getTrailer(place) {
//   let embed = "https://www.youtube.com/embed/";
//   place.src = embed + "uyPLu4E45So"; 
// }
export function getNecessaryTrailers(arr) {
  console.log(arr);
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
    console.log("hi");
  }
}

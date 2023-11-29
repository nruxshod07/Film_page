let base_url = "https://api.themoviedb.org/3";
let base_trailer_url = "https://api.themoviedb.org/3/movie";
export const getFilms = async (url) => {
  try {
    const res = await fetch(base_url + `/movie/${url}?language=ru}`, {
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
export const getFilm = async (url) => {
  const res = await fetch(base_url + url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY4N2I0YTdlYzE4NmZhM2ZjNzcxZGVjNTkxZTc0MyIsInN1YiI6IjY1NTc0NjVkNTM4NjZlMDEzOWUyZjkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWM59T4oWuK5yh6Ub7dnmOr33v6iRL9qrNj-k7rhq1E",
    },
  });
  return res;
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
// export const search = async (url) => {
//   try {
//     const res = await fetch(base_url + `/search/multi?query=${url}`, {
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY4N2I0YTdlYzE4NmZhM2ZjNzcxZGVjNTkxZTc0MyIsInN1YiI6IjY1NTc0NjVkNTM4NjZlMDEzOWUyZjkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWM59T4oWuK5yh6Ub7dnmOr33v6iRL9qrNj-k7rhq1E",
//       },
//     });
//     return res;
//   } catch (error) {
//     console.log("данные не получены");
//   }
// };
export const getTrailers = async (url) => {
  let embed = "https://www.youtube.com/embed/";
  try {
    const res = await fetch(
      base_trailer_url + `/${url}/videos?language=en-US`,
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
export const Genres = async (url) => {
  const res = await fetch(base_url + "/genre/movie/list?language=ru", {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY4N2I0YTdlYzE4NmZhM2ZjNzcxZGVjNTkxZTc0MyIsInN1YiI6IjY1NTc0NjVkNTM4NjZlMDEzOWUyZjkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWM59T4oWuK5yh6Ub7dnmOr33v6iRL9qrNj-k7rhq1E",
    },
  });
  return res;
};
